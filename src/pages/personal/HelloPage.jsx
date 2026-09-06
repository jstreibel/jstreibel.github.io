export default function HelloPage() {
  return (
    <div className="hello-page">
      <h1>Hello</h1>
      <p>and welcome.</p>

      <p>I&apos;ve been a software engineer for more than 15 years now, and have a PhD in Physics.</p>
      <p>In the past I automated accounting pipelines, reducing certain stages duration from <b>20 man-hours down to less than a minute</b>, all the while <b>reducing human error to zero</b> (modulo the occasional bug). </p>

      <p>During <b>PhD</b> I developed spectral methods for working with highly <b>non-linear PDEs</b>. By effectively linearizing problematic terms in the equations, I solved a decades-old problem in three (plus one) dimensions, and paved way for solution in any number of dimensions including non-integer. Besides, it was shown a useful method of analysis of localized wave phenomena. These can be found here: [add arXiv papers]</p>
    
      <p>I currently work at Monte Bravo, a wealth management company which I am proud to be a part of. I have worked on an automation system for frontend design that cut to <b>less than 1/10th the work of our FE developers</b>, all the while maintaining full consistency with tech stack requirements. We have developed a advisor-client transcript scoring system that produces alarms to the compliance team based on customized metrics, effectively allowing them to <b>act early and cirurgically</b> on undesired situations before they become incidents. This includes <b>fraud and abuse</b>. </p> 

      <p>
        I'm currently expanding to <b>machine learning</b>: to understand its state-of-the art from pure graph theory all the way up to the mechanics governing their statistical properties. To experiment heavily and turn its wheels. To bridge its accessible understanding layers with the fundamental stochastic principles from physics. 
      </p>

      <p>
        Besides that, I enjoy pulling things apart
        <sup className="footnote-reference">
          <a href="#footnote-dagger" id="footnote-ref-dagger" aria-label="Read footnote">
            †
          </a>
        </sup>, learning new ideas, and building small projects to learn different things like woodwork, electronics, CAD and 3D design.
      </p>

      <aside className="footnote" id="footnote-dagger" aria-label="Footnote">
        <span className="footnote-mark" aria-hidden="true">†</span>
        <span>
          As much as when I was 5; but now I actually fix them (and have evidence).{' '}
          <a className="footnote-backlink" href="#footnote-ref-dagger" aria-label="Back to text">
            ↩
          </a>
        </span>
      </aside>
    </div>
  );
}
