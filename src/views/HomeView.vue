<template>
  <div class="home">
    <HeroBanner />
    <CategorySection />
    <PopularCourses />
    <EventBannerStrip />
    <InstructorShowcase />
    <TestimonialCarousel />
  </div>
</template>

<script setup>
import HeroBanner from '@/components/home/HeroBanner.vue'
import CategorySection from '@/components/home/CategorySection.vue'
import PopularCourses from '@/components/home/PopularCourses.vue'
import EventBannerStrip from '@/components/home/EventBannerStrip.vue'
import InstructorShowcase from '@/components/home/InstructorShowcase.vue'
import TestimonialCarousel from '@/components/home/TestimonialCarousel.vue'
</script>
