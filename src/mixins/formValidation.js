export default {
  data() {
    return {
      msg: [],
      disabled: [true, true],
    };
  },
  watch: {
    username(value) {
      this.validateUsername(value);
    },
    phone(value) {
      this.validatePhone(value);
    },
  },
  computed: {
    isDisabledButton() {
      return !this.disabled.every((i) => i === false);
    },
  },
  methods: {
    validateUsername(value) {
      const reg = /^[a-zA-Z\s]+$/;
      if (!reg.test(value) && value.length > 0) {
        this.msg["username"] = "The field should contain only English letters.";
        this.disabled = [true, this.disabled[1]];
      } else if (value.length === 0) {
        this.msg["username"] = "The field is required.";
        this.disabled = [true, this.disabled[1]];
      } else {
        this.msg["username"] = "";
        this.disabled = [false, this.disabled[1]];
      }
    },
    validatePhone(value) {
      const reg = /^[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-|=\s]+$/;
      if (!reg.test(value) && value.length > 0) {
        this.msg["phone"] =
          "The field should contain only alphanumeric characters.";
        this.disabled = [this.disabled[1], true];
      } else if (value.length === 0) {
        this.msg["phone"] = "The field is required.";
        this.disabled = [this.disabled[1], true];
      } else {
        this.msg["phone"] = "";
        this.disabled = [this.disabled[1], false];
      }
    },
  },
};
