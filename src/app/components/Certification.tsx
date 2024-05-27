import React from "react";
import nsdc from '../assets/nsdc_logo.jpg'
import startup_logo from '../assets/startupindia_logo.png'
import nasscom from '../assets/nasscom_logo.png'
import moc_logo from '../assets/moc_logo.jpg'
import Image from "next/image";

function Certification() {
  return (
    <>
      <div className="certificates">
        <div className="course_header">
          <h1>
            Recogonised <span> By</span>
          </h1>
        </div>


<div className="slider">
	<div className="slide-track">
		<div className="slide">
		<Image
        src={nasscom}
        alt="Description of the image"
        width={150}
        height={70}
      />

		</div>
		<div className="slide">
		<Image
        src={startup_logo}
        alt="Description of the image"
        width={150}
        height={70}
      />

		</div>
		<div className="slide">
		<Image
        src={nsdc}
        alt="Description of the image"
        width={150}
        height={70}
      />

		</div>
		<div className="slide">
		<Image
        src={moc_logo}
        alt="Description of the image"
        width={150}
        height={70}
      />

		</div>
		<div className="slide">
		<Image
        src={nasscom}
        alt="Description of the image"
        width={150}
        height={70}
      />

		</div>
		<div className="slide">
		<Image
        src={startup_logo}
        alt="Description of the image"
        width={150}
        height={70}
      />

		</div>
		<div className="slide">
		<Image
        src={nsdc}
        alt="Description of the image"
        width={150}
        height={70}
      />

		</div>
		<div className="slide">
		<Image
        src={moc_logo}
        alt="Description of the image"
        width={150}
        height={70}
      />

		</div>
		<div className="slide">
		<Image
        src={nasscom}
        alt="Description of the image"
        width={150}
        height={70}
      />

		</div>
		<div className="slide">
		<Image
        src={startup_logo}
        alt="Description of the image"
        width={150}
        height={70}
      />

		</div>
		<div className="slide">
		<Image
        src={nsdc}
        alt="Description of the image"
        width={150}
        height={70}
      />

		</div>
		<div className="slide">
		<Image
        src={moc_logo}
        alt="Description of the image"
        width={150}
        height={70}
      />

		</div>

  </div>
</div>
</div>
    </>
  );
}

export default Certification;

