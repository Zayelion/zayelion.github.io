import lessonList from "../constants/lessonList.js";

export default function LandingPage() {

  return (
    <div>
      <h1 class="landing-page-header">
        Learn the thoughts and ways of <span>The Angel of Code</span>
      </h1>
      <p class="landing-page-subheader">
        Your journey to mastering coding starts here. Learn the art of
        grammatical and empathic software engineering so that you can always say
        yes to a product delivery. A repeatable system to take anyone{" "}
        <span>from Junior to Staff level.</span>
      </p>
      <div class="landing-page-buttons">
        <a
          class="primary button start-button"
          href="/lessons/imposter-syndrome"
        >
          Get Started, just jump in
        </a>
        <a className="secondary button about-button" href="/about">
          About the Angel of Code
        </a>
      </div>
      <a class="all-link" href='/lessons/'>All Lessons</a>
      <div class="landing-page-features">
      
        <ol className='link-list'>

          {lessonList.map((lesson) => (
            <li key={lesson.path}>
              <a href={lesson.path}>{lesson.title}</a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
