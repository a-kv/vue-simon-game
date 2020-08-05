<template>
    <div id="app" class="main">
        <h1>Simon says</h1>
        <h3 v-if="gameOver">Game Over! Try again!</h3>
        <div class="game-box">
            <div class="display">
                <div v-bind:class="`red ${sections[0].isActive && 'active'}`" v-on:click="changeSection(0)"></div>
                <div v-bind:class="`green ${sections[1].isActive  && 'active'}`" v-on:click="changeSection(1)"></div>
                <div v-bind:class="`blue ${sections[2].isActive  && 'active'}`" v-on:click="changeSection(2)"></div>
                <div v-bind:class="`yellow ${sections[3].isActive  && 'active'}`" v-on:click="changeSection(3)"></div>
            </div>
            <div class="game-info">
                <h2>Round: {{round}}</h2>
                <button v-on:click="start()">Start</button>
                <div>
                    <h2>Game options:</h2>
                    <div :selected="selectedRoundSpeed" :disabled="gameStarted">
                        <label for="light">Light:</label>
                        <input type="radio" name="option" id="light" value="1500" v-model="selectedRoundSpeed" checked>
                        <label for="medium">Medium:</label>
                        <input type="radio" name="option" id="medium" value="1000" v-model="selectedRoundSpeed">
                        <label for="hard">Hard:</label>
                        <input type="radio" name="option" id="hard" value="400" v-model="selectedRoundSpeed">
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import audioRed from './assets/1.mp3';
    import audioGreen from './assets/2.mp3';
    import audioBlue from './assets/3.mp3';
    import audioYellow from './assets/4.mp3';

    const speed = t => {
        return new Promise(resolve => setTimeout(resolve, t));
    }

    export default {
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

            async start() {
                this.gameStarted = true;
                this.sequence = [];
                this.playerSequence = [];
                await this.commonGameMethod();

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
    $common-width: 300px;
    $common-width-r: 296px;
    $color0: #FF5643;
    $color1: #BEDE15;
    $color2: #FEEF33;
    $color3: dodgerblue;

    @mixin start-style {
        display: flex;
        justify-content: center;
    }

    @mixin section-style {
        -webkit-border-radius: $common-width/2;
        border-radius: $common-width/2;
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

                .display {
                    background: #fff;
                    position: relative;
                    width: $common-width+3px;
                    height: $common-width+3px;
                    @include section-style;
                    box-shadow: 2px 1px 12px #aaa;

                    .red, .blue, .yellow, .green {
                        height: $common-width-r;
                        @include section-style;
                        position: absolute;
                        opacity: 0.7;
                        cursor: pointer;
                    }

                    .red:hover, .blue:hover, .yellow:hover, .green:hover, .active {
                        border: 2px solid black;
                        opacity: 1;
                    }

                    .red {
                        background: $color0;
                        clip: rect(0px, $common-width, $common-width/2, $common-width/2);
                        width: $common-width-r;
                    }

                    .blue {
                        background: $color3;
                        clip: rect(0px, $common-width/2, $common-width/2, 0px);
                        width: $common-width;
                    }

                    .yellow {
                        background: $color2;
                        clip: rect($common-width/2, $common-width/2, $common-width, 0px);
                        width: $common-width;
                    }

                    .green {
                        background: $color1;
                        clip: rect($common-width/2, $common-width, $common-width, $common-width/2);
                        width: $common-width-r;
                    }

                    .active {
                        opacity: 1;
                    }

                }

                .game-info {
                    @include start-style;
                    flex-direction: column;
                    margin-left: 20px;

                    & button {
                        width: 5em;
                        box-sizing: border-box;
                        font-size: 1.4em;
                        -webkit-border-radius: 10px 10px 10px 10px;
                        border-radius: 10px 10px 10px 10px;
                        background: #6DABE8;
                        border: none;
                        padding: 0.3em 0.6em;
                    }

                    & button:hover {
                        background: #78BCFF;
                    }

                    & button:focus {
                        outline: none;
                    }

                    .game-options input {
                        margin-right: 10px;
                    }
                }
            }
        }

    }

</style>
