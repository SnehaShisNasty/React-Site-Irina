import { useEffect } from "react";
import Services from "components/Services/Services";

const ServicesTypePage = () => {
    useEffect(() => {
    window.scrollTo(0,0)
    }, [])

  return (
    <section>
      <Services/>
    </section>
  )
}

export default ServicesTypePage
