<template>
    <div id="app" class="main">
        <h1>Simon says</h1>
        <h3 v-if="gameOver">Game Over! Try again!</h3>
        <div class="game-box">
            <GameDisplay v-on:changeSection="changeSection" v-bind:sections="sections"/>
            <GameInfo v-bind:round="round" v-bind:selectedRoundSpeed="selectedRoundSpeed"
                      v-bind:gameStarted="gameStarted" v-on:start="start"/>
        </div>
    </div>
</template>

<script>
    import audioRed from './assets/1.mp3';
    import audioGreen from './assets/2.mp3';
    import audioBlue from './assets/3.mp3';
    import audioYellow from './assets/4.mp3';
    import GameInfo from "@/components/GameInfo";
    import GameDisplay from "@/components/GameDisplay";

    const speed = t => {
        return new Promise(resolve => setTimeout(resolve, t));
    }

    export default {
        components: {GameDisplay, GameInfo},
        data() {
            return {
                gameStarted: false,
                sequence: [],
                playerSequence: [],
                round: 0,
                show: false,
                selectedRoundSpeed: 1500,
                sections: [
                    {id: 0, color: "red", isActive: false, tone: audioRed},
                    {id: 1, color: "green", isActive: false, tone: audioGreen},
                    {id: 2, color: "blue", isActive: false, tone: audioBlue},
                    {id: 3, color: "yellow", isActive: false, tone: audioYellow},
                ],
                gameOver: false,
            }
        },
        methods: {
            async commonGameMethod() {
                this.addStep();
                this.round = this.sequence.length;
                for (const sequence of this.sequence) {
                    this.playAudio(sequence);
                    this.sections[sequence].isActive = true;
                    await speed(this.selectedRoundSpeed);
                    this.sections[sequence].isActive = false;
                }
            },
            async preStart() {
                this.gameStarted = true;
                this.sequence = [];
                this.playerSequence = [];
                await this.commonGameMethod();
            },

            async start(speed) {
                if (speed > 0) {
                    this.selectedRoundSpeed = Number(speed)
                    await this.preStart();
                } else {
                    this.selectedRoundSpeed;
                    await this.preStart();
                }


            },

            playAudio(i) {
                new Audio(this.sections[i].tone).play();
            },

            changeSection(i) {
                this.playAudio(i);
                if (this.gameStarted) {
                    this.playerSequence.push(i);
                    let currentSections = this.playerSequence.length - 1;
                    if (this.playerSequence[currentSections] === this.sequence[currentSections]) {
                        if (this.playerSequence.length === this.sequence.length) {
                            this.repeat();
                        }
                    } else {
                        this.gameOvered();
                    }
                }
            },
            addStep() {
                this.sequence.push(Math.floor(Math.random() * 4));
            },

            async repeat() {
                this.playerSequence = [];
                await speed(this.selectedRoundSpeed);
                await this.commonGameMethod();
            },
            gameOvered() {
                this.gameOver = true;
                this.gameStarted = false;
                this.sequence = [];
                this.playerSequence = [];
            },
        }
    }

</script>

<style lang="scss">

    @mixin start-style {
        display: flex;
        justify-content: center;
    }

    body {
        font-family: Arial, serif;
        color: #333;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        .main {
            @include start-style;
            flex-direction: column;

            h1 {
                @include start-style;
            }

            h3 {
                @include start-style;
            }

            .game-box {
                @include start-style;

                flex-wrap: wrap;

            }
        }

    }

</style>
