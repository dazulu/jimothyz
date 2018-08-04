<template>
  <div class="contain">
    <h1 id="schedule" class="section__title">Stream Schedule</h1>

    <div class="two-column-content">
        <div class="column-content">
          <img src="~/static/images/schedule.png" alt="schedule" class="streamer-photo"/>
        </div>


        <div class="column-content">
          <div>
            <p class="copy">The curious and (often) accurate schedule of what Jim's planning to Stream for the coming week.</p>
            <h2 class="sub-title">{{date}}</h2>
            <ul class="sched-list">
              <li :key="index" v-for="(item, index) in schedule">
                <p>
                  <strong class="day">{{item[0]}}</strong>
                  <span v-if="item[1]">{{item[1]}} - {{item[2]}}</span>
                  <em v-else>no stream</em>
                </p>
              </li>
            </ul>
          </div>
        </div>

    </div>

  </div>
</template>

<script>
  import moment from 'moment'

  // Set start day of the week to Monday
  moment.updateLocale('en', {
    week: {
      dow: 1
    }
  })

  export default {
    computed: {
      schedule () { return this.$store.state.channel.schedule },
      date () {
        return `Week of the ${moment().startOf('week').format('Do')} to the ${moment().endOf('week').format('Do')} of ${moment().format('MMMM')}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sub-title {
    color: $color-copy;
    font-family: $font-family-heading;
    font-weight: 400;
    font-size: 26px;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  .sched-list {
    list-style-type: none;
    padding: 0;

    li {
      color: $color-copy;
      line-height: 1.5;
      font-size: 20px;
      font-weight: 300;
      line-height: 1.5;
    }
  }

  .day {
    font-family: $font-family-heading;
    font-weight: 400;
    margin-right: 10px;
  }

  .schedule-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .schedule {
    max-width: 1024px;
    width: 100%;
  }
</style>
