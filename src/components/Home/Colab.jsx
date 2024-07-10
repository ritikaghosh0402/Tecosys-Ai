/* eslint-disable no-unused-vars */

import { companies } from "../../data/Constant"
import '../../App.css'
import CollaboratorSlider from "./CollaboratorSlider";

const Colab = () => {
  return (
    <section id="collaborators" className="py-14 md:py-20">
      <h1 className="heading pb-4 w-full text-3xl font-medium text-center md:text-6xl bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-300 mb-10">
        Our Collaborators
      </h1>

      <CollaboratorSlider />
    </section>
  )
};

export default Colab;