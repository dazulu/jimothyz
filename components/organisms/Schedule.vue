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
            <h2 class="sub-title">Week 16th - 21st April 2018</h2>
            <ul class="sched-list">
              <li><strong class="day">Monday</strong> - NIOH</li>
              <li><strong class="day">Tuesday</strong> - NIOH</li>
              <li><strong class="day">Wednesday </strong> - NIOH</li>
              <li><strong class="day">Thursday</strong> - <em>CLUBG</em>! Bangers &amp; PUBG</li>
              <li><strong class="day">Friday</strong> - Bloodborne</li>
              <li><strong class="day">Saturday</strong> - Scary Game (w/guests?)</li>
            </ul>
          </div>
        </div>

    </div>

  </div>
</template>

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
