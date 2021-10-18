import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className='px-6 py-2'>
      {/* //! Education & Experience */}
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div className=''>
            <h5 className='my-2 text-xl font-bold'>
              BSc in Computer Science Engineering (CSE)
            </h5>
            <p className='font-semibold'>
              Ahsanullah University of Science and Technology (2016-2021)
            </p>
            <p className='my-3'>
              I have obtained the BSc degree with CGPA 3.597
            </p>
          </div>
        </div>
        <div>
          <div className='mt-16'>
            <h5 className='font-bold '>Higher Secondary Certificate (2016)</h5>
            <p className='font-semibold '>Adamjee Cantonment College (ACC)</p>
            <p className=''>GPA: 5.00</p>
          </div>
          <div className='mt-5'>
            <h5 className='font-bold '>Secondary School Certificate (2014)</h5>
            <p className='font-semibold'>BAF Shaheen College Kurmitola</p>
            <p className=''>GPA: 5.00</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className='grid gap-9 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Languages</h5>
          <div className='my-2'>
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className='my-3 text-2xl font-bold'>Libraries & Frameworks</h5>
          <div className='my-2'>
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
