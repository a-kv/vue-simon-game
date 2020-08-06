<template>
    <div class="game-info">
        <h2>Round: {{round}}</h2>
        <button v-on:click="$emit('start', selectedRoundSpeed)">Start</button>
        <div >
            <h2>Game options:</h2>
            <div :selected="selectedRoundSpeed">
                <label for="light">Light:</label>
                <input type="radio" name="option" id="light" value="1500" v-model="selectedRoundSpeed" checked>
                <label for="medium">Medium:</label>
                <input type="radio" name="option" id="medium" value="1000" v-model="selectedRoundSpeed">
                <label for="hard">Hard:</label>
                <input type="radio" name="option" id="hard" value="400" v-model="selectedRoundSpeed">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GameInfo",
        props: {
            round: Number,
            gameStarted: Boolean,
            start: Function
        },data() {
            return {
                selectedRoundSpeed: ''
            }
        },
        methods: {
            show() {
                this.$emit('roundSpeed', this.selectedRoundSpeed)
            }
        },
    }
</script>

<style lang="scss" scoped>

    @mixin start-style {
        display: flex;
        justify-content: center;
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
</style>