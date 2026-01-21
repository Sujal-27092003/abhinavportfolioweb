export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-white to-pink-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-pink-100 rounded-full">
            <span className="text-pink-700 text-sm font-medium">👋 Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">About Me</h2>
        </div>
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <p className="text-lg text-slate-600">
            I am an educator currently working with primary grade classrooms, impacting 99 students. My 
            journey as a Fellow with Teach For India has brought clarity to my purpose and aligned me with 
            the larger movement to build excellent education in schools.
          </p>
          <p className="text-lg text-slate-600">
            I am driven by direct classroom impact and aspire to deepen this work through learning and 
            development, training, and program design. My background in the creative field shapes how I 
            approach teaching, helping my students and me build essential 21st-century skills such as 
            communication, collaboration, and critical thinking.
          </p>
        </div>
      </div>
    </section>
  );
}