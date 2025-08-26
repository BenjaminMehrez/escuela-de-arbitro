import Abouts from '@/components/Aboutus'
import WhyChooseUs from '@/components/WhyChooseUs'
import Courses from '@/components/Courses'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Form from '@/components/Form'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'

function HomPage() {
  return (
    <>
      <Hero />
      <Abouts />
      {/* <CTA /> */}
      <Courses />
      <Testimonials />
      <WhyChooseUs />
      <Form />
      <Footer />
    </>
  )
}

export default HomPage