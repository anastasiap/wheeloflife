<template>
    <div>
        <div v-if="!isDefault" class="circle custom-circle"><h3>Custom</h3></div>
        <div class="row" v-if="isDefault">
            <div id="custom-wheel-container" class="default-wheel-container clearfix">
                <div class="col-lg-7">
                    <div class="center-block" >
                        <div class="circle-wrapper">
                            <ul class="circle headings">
                                <li v-for="(category, index) in categories" :bind='index'>
                                    <div class="text"><h5>{{ category.name }}</h5></div>
                                </li>
                            </ul>
                            <!-- todo: remove all inline styles -->
                            <ul class="circle body">
                                <li v-for="category in categories">
                                    <div class="text" >
                                        <span 
                                            class="grade-wrapper" :class="category.bgColor" 
                                            v-for="(grade, index) in gradesList" 
                                            :bind='index'
                                            @click="setGrades(category, grade)">
                                            <a href="javascript:void(0);">{{ grade.grade }}</a>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>    
                    </div>
                </div>
                <!-- <div class="col-lg-5">
                    <graph><graph>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        methods: {
            setGrades(category, grade) {

            },
        },
        name: 'Wheel',
        computed: mapState({
            isDefault: 'isDefault',
            catNumber: 'categoriesNumber',
            categories: 'categories',
            gradesList: 'gradesList'
        })
    }
</script>

<style lang="scss">
    body {
        background-color: #fff;

        & > .container {
            min-height: 600px;

            @media (max-width: 768px){
                min-width: 40em;
            }
        }
    }

    h2 {
        margin-top: 10px;
    }

    .subtitle  {
        margin-top: 10px;
        margin-bottom: 35px;
    }

    #default-wheel-container {
        background-color: #fff;
        width:110%;
        padding-right: 10%;
        padding-left: 5%;
        padding-top: 5%;
    }

    .new-circle-btn {
        margin-top: -20px;
        margin-bottom: 25px;
        display: flex;
        justify-content: center;
        width: 100%;

        button {
            padding-top: 15px;

            &:last-child {
                color: #000 !important;
            }
        }
    }

    .circle-wrapper {
        height: 470px;
        min-width: 410px;
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
        position: relative;

        @media (max-width: 768px){
            height: 500px;
        }
    }
/*
.section-marks {
  margin-top: -45px;
}
*/

.blue {
  background-color: #2196F3;
}

.pink {
  background-color: #E91E63;
}

.green {
  background-color: #4CAF50;
}

.yellow {
  background-color: #FDD835;
}

.red {
  background-color: #F44336;
}

.deep-purple {
  background-color: #673AB7;
}

.indigo {
  background-color: #3F51B5;
}

.lime {
  background-color: #CDDC39;
}

.orange {
  background-color: #FF9800;
}

.light-green {
  background-color: #8BC34A;
}

.light-blue {
  background-color: #e1f5fe;
}

.blue-darken {
  background-color: #1e88e5;
}

.progress-bar {
  &.yellow {
    @extend .yellow;
  }

  &.blue {
    @extend .blue;
  }

  &.pink {
    @extend .pink;
  }

  &.green {
    @extend .green;
  }

  &.red {
    @extend .red;
  }

  &.deep-purple {
    @extend .deep-purple;
  }

  &.indigo {
    @extend .indigo;
  }

  &.lime {
    @extend .lime;
  }

  &.orange {
    @extend .orange;
  }

  &.light-green {
    @extend .light-green;
  }
}

.area-name {
  max-width: 115px;
  display: inline-block;
}

.marks-list {
  padding-left: 0;
  min-height: 10px;
  margin-bottom: 40px;

  li {
    font-weight: 700;
    line-height: 2;
    text-transform: uppercase;
    position: relative
  }

  .mark {
    font-size: 1.5em;
    line-height: 0.8;
    padding-bottom: 2px;
    font-weight: 400;
    float: right;
    color: white;
  }

  .progress {
    position: absolute;
    top: 18px;
    width: 60%;
    right: 30px;
  }
}

.form-group {
  margin: 0 0 5px;
}

.circle, .circle12 {
  position: relative;
  border: 1px solid #9c9c9c;
  width: 30em;
  height: 30em;
  border-radius: 50%;
  list-style: none;
  overflow: hidden;
  top: 35px;

  li {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 50%;
    transform-origin: 0% 100%;
  }

  .text {
    position: absolute;
    left: -95%;
    width: 200%;
    height: 175%;
    text-align: center;
    -webkit-transform: skewY(60deg) rotate(15deg);
    -ms-transform: skewY(60deg) rotate(15deg);
    transform: skewY(60deg) rotate(15deg);
    padding-top: 18px;

    span {
      display: block;

      &:first-child {
        padding-top: 9px;
      }

      &:last-child {
        padding-bottom: 10px;
      }

      a {
        display: block;
        //border: 1px solid #ddd;
        color: #000;
        font-size: 11.5px;
        line-height: 1.5;
      }

      &:last-child {
        a {
          padding-bottom: 20px;
        }
      }
    }
  }

  li:first-child {
    -webkit-transform: rotate(0deg) skewY(-60deg);
    -ms-transform: rotate(0deg) skewY(-60deg);
    transform: rotate(0deg) skewY(-60deg);
  }
  li:nth-child(2) {
    -webkit-transform: rotate(30deg) skewY(-60deg);
    -ms-transform: rotate(30deg) skewY(-60deg);
    transform: rotate(30deg) skewY(-60deg);
  }
  li:nth-child(3) {
    -webkit-transform: rotate(60deg) skewY(-60deg);
    -ms-transform: rotate(60deg) skewY(-60deg);
    transform: rotate(60deg) skewY(-60deg);
  }
  li:nth-child(4) {
    -webkit-transform: rotate(90deg) skewY(-60deg);
    -ms-transform: rotate(90deg) skewY(-60deg);
    transform: rotate(90deg) skewY(-60deg);
  }
  li:nth-child(5) {
    -webkit-transform: rotate(120deg) skewY(-60deg);
    -ms-transform: rotate(120deg) skewY(-60deg);
    transform: rotate(120deg) skewY(-60deg);
  }
  li:nth-child(6) {
    -webkit-transform: rotate(150deg) skewY(-60deg);
    -ms-transform: rotate(150deg) skewY(-60deg);
    transform: rotate(150deg) skewY(-60deg);
  }
  li:nth-child(7) {
    -webkit-transform: rotate(180deg) skewY(-60deg);
    -ms-transform: rotate(180deg) skewY(-60deg);
    transform: rotate(180deg) skewY(-60deg);
  }
  li:nth-child(8) {
    -webkit-transform: rotate(210deg) skewY(-60deg);
    -ms-transform: rotate(210deg) skewY(-60deg);
    transform: rotate(210deg) skewY(-60deg);
  }
  li:nth-child(9) {
    -webkit-transform: rotate(240deg) skewY(-60deg);
    -ms-transform: rotate(240deg) skewY(-60deg);
    transform: rotate(240deg) skewY(-60deg);
  }
  li:nth-child(10) {
    -webkit-transform: rotate(270deg) skewY(-60deg);
    -ms-transform: rotate(270deg) skewY(-60deg);
    transform: rotate(270deg) skewY(-60deg);
  }
  li:nth-child(11) {
    -webkit-transform: rotate(300deg) skewY(-60deg);
    -ms-transform: rotate(300deg) skewY(-60deg);
    transform: rotate(300deg) skewY(-60deg);
  }
  li:nth-child(12) {
    -webkit-transform: rotate(330deg) skewY(-60deg);
    -ms-transform: rotate(330deg) skewY(-60deg);
    transform: rotate(330deg) skewY(-60deg);
  }

  &.headings {
    position: absolute;
    width: 35em;
    height: 35em;
    border: 0;
    top: 0;

    li .text {
      background: transparent;
    }
  }
}

.circle4 {
  @extend .circle;

  .text {
    position: absolute;
    left: -134px;
    width: 210%;
    height: 119%;
    text-align: center;
    -webkit-transform: skewY(180deg) rotate(45deg);
    transform: skewY(180deg) rotate(45deg);
    padding-top: 33px;

    span {
      padding: 2px 0;

      a {
        line-height: 1.3;
      }
    }
  }

  li:first-child {
    -webkit-transform: rotate(0deg) skewY(-180deg);
    -ms-transform: rotate(0deg) skewY(-180deg);
    transform: rotate(0deg) skewY(-180deg);
  }
  li:nth-child(2) {
    -webkit-transform: rotate(90deg) skewY(-180deg);
    -ms-transform: rotate(90deg) skewY(-180deg);
    transform: rotate(90deg) skewY(-180deg);
  }
  li:nth-child(3) {
    -webkit-transform: rotate(180deg) skewY(-180deg);
    -ms-transform: rotate(180deg) skewY(-180deg);
    transform: rotate(180deg) skewY(-180deg);
  }
  li:nth-child(4) {
    -webkit-transform: rotate(270deg) skewY(-180deg);
    -ms-transform: rotate(270deg) skewY(-180deg);
    transform: rotate(270deg) skewY(-180deg);
  }

  &.headings {
    @extend .circle.headings;

    .text {
      padding-top: 30px;
      left: -160px;
    }

    li:first-child {
      -webkit-transform: rotate(0deg) skewY(-180deg);
      -ms-transform: rotate(0deg) skewY(-180deg);
      transform: rotate(0deg) skewY(-180deg);
    }
    li:nth-child(2) {
      -webkit-transform: rotate(90deg) skewY(-180deg);
      -ms-transform: rotate(90deg) skewY(-180deg);
      transform: rotate(90deg) skewY(-180deg);
    }
    li:nth-child(3) {
      -webkit-transform: rotate(180deg) skewY(-180deg);
      -ms-transform: rotate(180deg) skewY(-180deg);
      transform: rotate(180deg) skewY(-180deg);
    }
    li:nth-child(4) {
      -webkit-transform: rotate(270deg) skewY(-180deg);
      -ms-transform: rotate(270deg) skewY(-180deg);
      transform: rotate(270deg) skewY(-180deg);
    }

    li .text {
      background: transparent;
    }
  }
}

.circle6 {
  @extend .circle;

  .text {
    position: absolute;
    left: -205px;
    width: 204%;
    height: 183%;
    text-align: center;
    -webkit-transform: skewY(31deg) rotate(29deg);
    transform: skewY(210deg) rotate(32deg);
    padding-top: 5px;

    span {
      padding: 1px 0;
    }
  }

  li:first-child {
    -webkit-transform: rotate(0deg) skewY(-210deg);
    -ms-transform: rotate(0deg) skewY(-210deg);
    transform: rotate(0deg) skewY(-210deg);
  }
  li:nth-child(2) {
    -webkit-transform: rotate(60deg) skewY(-210deg);
    -ms-transform: rotate(60deg) skewY(-210deg);
    transform: rotate(60deg) skewY(-210deg);
  }
  li:nth-child(3) {
    -webkit-transform: rotate(120deg) skewY(-210deg);
    -ms-transform: rotate(120deg) skewY(-210deg);
    transform: rotate(120deg) skewY(-210deg);
  }
  li:nth-child(4) {
    -webkit-transform: rotate(180deg) skewY(-210deg);
    -ms-transform: rotate(180deg) skewY(-210deg);
    transform: rotate(180deg) skewY(-210deg);
  }
  li:nth-child(5) {
    -webkit-transform: rotate(240deg) skewY(-210deg);
    -ms-transform: rotate(240deg) skewY(-210deg);
    transform: rotate(240deg) skewY(-210deg);
  }
  li:nth-child(6) {
    -webkit-transform: rotate(300deg) skewY(-210deg);
    -ms-transform: rotate(300deg) skewY(-210deg);
    transform: rotate(300deg) skewY(-210deg);
  }

  &.headings {
    @extend .circle.headings;

    .text {
      padding-top: 0px;
      left: -158px;
      width: 127%;
    }

    li .text {
      background: transparent;
    }
  }
}


.circle8 {
  @extend .circle;

  .text {
    position: absolute;
    left: -170px;
    width: 195%;
    height: 155%;
    text-align: center;
    -webkit-transform: skewY(225deg) rotate(22deg);
    transform: skewY(225deg) rotate(23deg);
    padding-top: 43px;

    span {
      padding: 1px 0;
    }
  }

  li:first-child {
    -webkit-transform: rotate(0deg) skewY(-225deg);
    -ms-transform: rotate(0deg) skewY(-225deg);
    transform: rotate(0deg) skewY(-225deg);
  }
  li:nth-child(2) {
    -webkit-transform: rotate(45deg) skewY(-225deg);
    -ms-transform: rotate(45deg) skewY(-225deg);
    transform: rotate(45deg) skewY(-225deg);
  }
  li:nth-child(3) {
    -webkit-transform: rotate(90deg) skewY(-225deg);
    -ms-transform: rotate(90deg) skewY(-225deg);
    transform: rotate(90deg) skewY(-225deg);
  }
  li:nth-child(4) {
    -webkit-transform: rotate(135deg) skewY(-225deg);
    -ms-transform: rotate(135deg) skewY(-225deg);
    transform: rotate(135deg) skewY(-225deg);
  }
  li:nth-child(5) {
    -webkit-transform: rotate(180deg) skewY(-225deg);
    -ms-transform: rotate(180deg) skewY(-225deg);
    transform: rotate(180deg) skewY(-225deg);
  }
  li:nth-child(6) {
    -webkit-transform: rotate(225deg) skewY(-225deg);
    -ms-transform: rotate(225deg) skewY(-225deg);
    transform: rotate(225deg) skewY(-225deg);
  }
  li:nth-child(7) {
    -webkit-transform: rotate(270deg) skewY(-225deg);
    -ms-transform: rotate(270deg) skewY(-225deg);
    transform: rotate(270deg) skewY(-225deg);
  }
  li:nth-child(8) {
    -webkit-transform: rotate(315deg) skewY(-225deg);
    -ms-transform: rotate(315deg) skewY(-225deg);
    transform: rotate(315deg) skewY(-225deg);
  }

  &.headings {
    @extend .circle.headings;

    .text {
      padding-top: 37px;
      left: -120px;
      width: 125%;
    }

    li .text {
      background: transparent;
    }
  }
}


.circle10 {
  @extend .circle;

  .text {
    position: absolute;
    left: -179px;
    width: 200%;
    height: 149%;
    text-align: center;
    -webkit-transform: skewY(60deg) rotate(15deg);
    transform: skewY(234deg) rotate(19deg);
    padding-top: 44px;

    span {
      padding: 0;
    }
  }

  li:first-child {
    -webkit-transform: rotate(0deg) skewY(-234deg);
    -ms-transform: rotate(0deg) skewY(-234deg);
    transform: rotate(0deg) skewY(-234deg);
  }
  li:nth-child(2) {
    -webkit-transform: rotate(36deg) skewY(-234deg);
    -ms-transform: rotate(36deg) skewY(-234deg);
    transform: rotate(36deg) skewY(-234deg);
  }
  li:nth-child(3) {
    -webkit-transform: rotate(72deg) skewY(-234deg);
    -ms-transform: rotate(72deg) skewY(-234deg);
    transform: rotate(72deg) skewY(-234deg);
  }
  li:nth-child(4) {
    -webkit-transform: rotate(108deg) skewY(-234deg);
    -ms-transform: rotate(108deg) skewY(-234deg);
    transform: rotate(108deg) skewY(-234deg);
  }
  li:nth-child(5) {
    -webkit-transform: rotate(144deg) skewY(-234deg);
    -ms-transform: rotate(144deg) skewY(-234deg);
    transform: rotate(144deg) skewY(-234deg);
  }
  li:nth-child(6) {
    -webkit-transform: rotate(180deg) skewY(-234deg);
    -ms-transform: rotate(180deg) skewY(-234deg);
    transform: rotate(180deg) skewY(-234deg);
  }
  li:nth-child(7) {
    -webkit-transform: rotate(216deg) skewY(-234deg);
    -ms-transform: rotate(216deg) skewY(-234deg);
    transform: rotate(216deg) skewY(-234deg);
  }
  li:nth-child(8) {
    -webkit-transform: rotate(252deg) skewY(-234deg);
    -ms-transform: rotate(252deg) skewY(-234deg);
    transform: rotate(252deg) skewY(-234deg);
  }
  li:nth-child(9) {
    -webkit-transform: rotate(288deg) skewY(-234deg);
    -ms-transform: rotate(288deg) skewY(-234deg);
    transform: rotate(288deg) skewY(-234deg);
  }
  li:nth-child(10) {
    -webkit-transform: rotate(324deg) skewY(-234deg);
    -ms-transform: rotate(324deg) skewY(-234deg);
    transform: rotate(324deg) skewY(-234deg);
  }

  &.headings {
    @extend .circle.headings;

    .text {
      padding-top: 51px;
      left: -120px;
      width: 125%;
    }

    li .text {
      background: transparent;
    }
  }
}

.circle-empty {
  @extend .circle;
}


h5 {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}

.export-btns {
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px){
    margin-top: 15px;
    margin-bottom: 15px;
  }

  button {
    width: 510px;
  }
}

.marks-list {
  li {
    list-style: none;
    padding: 0;
  }
}

.circle6.headings {
  @extend .circle.headings;
}

.circle8.headings {
  @extend .circle.headings;
}

.circle10.headings {
  @extend .circle.headings;
}

.circle12.headings {
  @extend .circle.headings;
}

.alert-danger {
  margin: 5px 55px 55px;
}

.active-span {
  background: rgba(0,0,0, 0.6);
  font-weight: 700;

  a {
    color: #000;
  }
}

.form-titles {
  margin-top: 55px;
}

#custom-wheel-container, .default-wheel-container, .container {
  background: white !important;
}

ul, ol {
  margin-top: 0;
  margin-bottom: 0;
}


</style>