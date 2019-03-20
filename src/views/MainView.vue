<template>
    <div id="wrapper">
        <div id="wrapper-flex-container">
            <div id="logo-container">
                <img id="logo" src="/images/branding/korie-logo-white.svg" />
                <img id="car" src="/images/branding/car.png" width="60" />
            </div>
            <div>
                <div id="coming-soon">COMING SOON</div>
            </div>
            <div>
                <div>
                    <div id="mailing-list">Sign Up to our Mailing List!</div>
                </div>
                <div id="form-container">
                    <div>
                        <KInput
                            v-model="inputData.email"
                            color="pink"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div>
                        <KButton
                            @click="sendMail"
                            label="Notify Me"
                            color="pink"
                            radius="1.5"
                            uppercase
                            fontSize="1"
                            paddingVertical="0.5"
                            paddingHorizontal="3"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import KInput from "@/components/KInput";
import KButton from "@/components/KButton";
import carAnimation from "@/assets/car-animation";
import mailingListService from "@/services/mailing-list-service";

export default {
    data() {
        return {
            carAnimation: carAnimation.animation,
            carTiming: carAnimation.timing,
            inputData: {
                email: ""
            }
        };
    },
    created() {
        
    },
    mounted() {
        document.getElementById("car").animate(this.carAnimation, this.carTiming);
    },
    methods: {
        sendMail() {
            if (this.inputData.email !== "") {
                const data = {
                    email: this.inputData.email
                };

                mailingListService.sendMail(data)
                    .then(() => {
                        console.log("hi")
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            }
        }
    },
    components: {
        KInput,
        KButton
    }
};
</script>

<style scoped>
#wrapper {
    min-width: 800px;
    min-height: 100vh;
    background-color: #D42191;
    overflow: auto;
}

#wrapper-flex-container {
    padding: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#logo-container {
    padding: 75px;
    border: solid 2.5px white;
    position: relative;
}

#logo {
    transform: scale(1.75);
}

#car {
    position: absolute;
    top: 0px;
    left: 0px;
    transform: translateX(-50%) translateY(-50%);
}

#coming-soon {
    font-size: 97px;
    color: white;
    margin-top: 50px;
    margin-bottom: 70px;
}

#mailing-list {
    font-size: 48px;
    color: white;
    margin-bottom: 15px;
}

#form-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#form-container > div:first-of-type {
    margin-right: 10px;
    flex: 1 0 auto;
}

#form-container > div:last-of-type {
    flex: 0 0 auto;
}
</style>
