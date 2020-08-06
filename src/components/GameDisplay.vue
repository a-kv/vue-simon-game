<template>
    <div class="display">
        <div v-bind:class="`red ${sections[0].isActive && 'active'}`" v-on:click="$emit('changeSection', 0)"></div>
        <div v-bind:class="`green ${sections[1].isActive  && 'active'}`" v-on:click="$emit('changeSection', 1)"></div>
        <div v-bind:class="`blue ${sections[2].isActive  && 'active'}`" v-on:click="$emit('changeSection', 2)"></div>
        <div v-bind:class="`yellow ${sections[3].isActive  && 'active'}`" v-on:click="$emit('changeSection', 3)"></div>
    </div>
</template>

<script>
    export default {
        name: "GameDisplay",
        props: {
            sections: Array,
            changeSection: Function
        },data() {
            return {
                selectedRoundSpeed: ''
            }
        },
        methods: {
            show() {
                this.$emit('roundSpeed', this.selectedRoundSpeed)
            }
        }
    }
</script>

<style lang="scss" scoped>
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
</style>