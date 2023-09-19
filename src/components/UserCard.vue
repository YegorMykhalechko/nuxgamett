<template>
  <div v-if="user" class="user-card">
    <div class="user-card__title">
      <div>{{ user.name }}</div>
      <div>
        <a :href="`mailto:${user.email}`">{{ user.email }}</a>
      </div>
    </div>
    <div class="user-card__body">
      <div class="user-card__body-item">
        <div class="user-card__body-item--title">Address:</div>
        <div class="user-card__body-item--content">
          <address>{{ getUserAddress }}</address>
        </div>
      </div>
      <div class="user-card__body-item">
        <div class="user-card__body-item--title">Company:</div>
        <div class="user-card__body-item--content">
          <div>{{ user.company.name }}</div>
          <blockquote>"{{ user.company.catchPhrase }}"</blockquote>
          <div>{{ user.company.bs }}</div>
        </div>
      </div>
      <div class="user-card__body-item">
        <div class="user-card__body-item--title">Phone:</div>
        <div class="user-card__body-item--content">
          <a :href="`tel:${this.user.phone}`">{{ this.user.phone }}</a>
        </div>
      </div>
      <div class="user-card__body-item">
        <div class="user-card__body-item--title">Website:</div>
        <div class="user-card__body-item--content">
          <a target="_blank" :href="`https://${this.user.website}`">{{
            this.user.website
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "../ui/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  props: {
    user: Object,
  },
  computed: {
    getUserAddress() {
      const { street, suite, city, zipcode } = this.user.address;
      return street + ", " + suite + ", " + city + ", " + zipcode;
    },
  },
};
</script>
<style scoped lang="scss">
.user-card {
  background-color: var(--bgCardColor);
  border-radius: 5px;
  overflow: hidden;
  height: auto;
  width: 100%;
  &__title {
    color: var(--textTitleColor);
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: var(--bgTitleCardColor);
    @media screen and (max-width: 576px) {
      flex-direction: column;
    }
  }
  &__body {
    padding: 25px 20px;
    @media screen and (max-width: 576px) {
      text-align: center;
    }
    &-item {
      display: flex;
      align-items: center;
      margin-top: 10px;
      &:first-child {
        margin-top: 0;
      }
      &--title {
        width: 30%;
      }
      &--content {
        font-weight: 500;
        width: 70%;
        blockquote {
          margin: 0;
          font-style: italic;
        }
      }
      @media screen and (max-width: 576px) {
        flex-direction: column;
      }
    }
  }
}
</style>
