import { ref } from 'vue'
import { courses } from '@/data/courses'
import { instructors } from '@/data/instructors'
import { categories } from '@/data/categories'

export function useCourses() {
  const allCourses = ref(courses)

  const getCourseById = (id) =>
    allCourses.value.find(c => c.id === Number(id))

  const getCoursesByCategory = (categoryId) =>
    allCourses.value.filter(c =>
      c.categoryId === categoryId || c.parentCategoryId === categoryId
    )

  const getInstructorForCourse = (course) =>
    instructors.find(i => i.id === course.instructorId)

  const getInstructorById = (id) =>
    instructors.find(i => i.id === Number(id))

  const getCategoryName = (categoryId) => {
    for (const cat of categories) {
      if (cat.id === categoryId) return cat.name
      const sub = cat.subcategories.find(s => s.id === categoryId)
      if (sub) return sub.name
    }
    return ''
  }

  const getPopularCourses = (limit = 8) =>
    [...allCourses.value]
      .sort((a, b) => b.enrollmentCount - a.enrollmentCount)
      .slice(0, limit)

  const filterCourses = ({ category, level, priceRange, sort }) => {
    let filtered = [...allCourses.value]

    if (category) {
      filtered = filtered.filter(c =>
        c.categoryId === category || c.parentCategoryId === category
      )
    }
    if (level) {
      filtered = filtered.filter(c => c.level === level)
    }
    if (priceRange) {
      const [min, max] = priceRange
      filtered = filtered.filter(c =>
        c.salePrice >= min && (max ? c.salePrice <= max : true)
      )
    }

    const sortMap = {
      popular: (a, b) => b.enrollmentCount - a.enrollmentCount,
      newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      priceLow: (a, b) => a.salePrice - b.salePrice,
      priceHigh: (a, b) => b.salePrice - a.salePrice,
      rating: (a, b) => b.rating - a.rating
    }
    if (sort && sortMap[sort]) filtered.sort(sortMap[sort])

    return filtered
  }

  return {
    allCourses,
    getCourseById,
    getCoursesByCategory,
    getInstructorForCourse,
    getInstructorById,
    getCategoryName,
    getPopularCourses,
    filterCourses
  }
}
