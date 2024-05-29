import Layout from "./components/Layout";
import Home_page from './home/page'
import About from './about/page'
import Courses from './courses/page'
import Whyus from './whyus/page'
import Technologystack from './technologystack/page'
import Certification from './components/Certification'
import Contact from './contact/page'
import Companies from "./components/Companies";
import Testimonials from "./components/Testimonials";
import NewUpdates from "./components/NewUpdates";
import Faq from "./components/Faq"

export default function Home() {
  return (
    <Layout>
      <main >
        <Home_page/>
        <Testimonials/>
        <Courses/>
        <About/>
        <Certification/>
        <Whyus/>
        <Companies/>
        <NewUpdates/>
        <Faq/>
        <Technologystack/>
        <Contact/>
      </main>
    </Layout>
  );
}
