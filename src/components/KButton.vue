<template>
    <button
        @click="$emit('click')"
        :class="buttonClasses"
        :style="buttonStyling"
    >
        {{label}}
    </button>
</template>

<script>
export default {
    props: {
        color: String,
        label: String,
        radius: String,
        uppercase: Boolean,
        fontSize: String,
        paddingVertical: String,
        paddingHorizontal: String
    },
    computed: {
        buttonClasses() {
            const classes = ["button"];

            switch (this.color) {
                default:
                    classes.push("button-pink");
            }

            return classes.join(" ");
        },
        buttonStyling() {
            const style = {
                borderRadius: this.radius + "rem",
                fontSize: this.fontSize + "rem",
                padding: this.paddingVertical + "rem " + this.paddingHorizontal + "rem"
            };

            if (this.uppercase) {
                style.textTransform = "uppercase";
            }

            return style;
        }
    }
};
</script>

<style scoped>
.button {
    outline: none;
    border: none;
}

.button:hover {
    cursor: pointer;
}

.button-pink {
    border: solid 1px white;
    background-color: #D42191;
    color: white;
}

.button-pink:hover {
    background-color: rgb(163, 16, 109);
}
</style>
