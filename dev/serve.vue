<template>
    <div class="wrapper">
        <Datepicker
            range
            hide-offset-dates
            :multiCalendars="2"
            v-model="selectedDate"
            @range-hovering="test"
            @hover-day="test1"
            locale="ru-Ru"
            placeholder="Select Date"
        />
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import Datepicker from '../src/VueDatePicker/VueDatePicker.vue';

    const test = (args: [Date, Date, boolean]) => {
      const [oneDay, hoverDay, direction] = args;
      console.log(oneDay, hoverDay, direction);
    };

    const test1 = (day: Date) => {
      console.log(day)
    };

    const selectedDate = ref();
</script>

<style lang="scss">
    @use 'src/VueDatePicker/style/main';

    .wrapper {
        padding: 200px;
    }
</style>
