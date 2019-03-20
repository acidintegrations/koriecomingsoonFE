<template>
    <input
        @input="$emit('input', $event.target.value)"
        :class="inputClasses"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        :required="required"
    />
</template>

<script>
export default {
    props: {
        value: [String, Number],
        type: String,
        placeholder: String,
        color: String,
        required: Boolean
    },
    computed: {
        inputClasses() {
            const classes = ["input"];

            switch (this.color) {
                default:
                    classes.push("input-pink");
            }

            return classes.join(" ");
        }
    }
};
</script>

<style>
.input {
    outline: none;
    border: none;
    width: calc(100% - 20px);
    display: block;
    font-size: 1.25rem;
    font-weight: 500;
    padding: 10px;
    border-radius: 5px;
}

.input-pink, .input-pink::placeholder {
    color: #D42191;
}
</style>
