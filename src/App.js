import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DawgPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
      padding: '2rem'
    },
    card: {
      maxWidth: '80rem',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden'
    },
    header: {
      backgroundColor: '#1e3a8a',
      color: 'white',
      padding: '1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    content: {
      padding: '3rem',
      minHeight: '500px'
    },
    title: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '0.5rem'
    },
    subtitle: {
      fontSize: '1.125rem',
      color: '#4b5563',
      marginTop: '1rem'
    },
    blueBox: {
      backgroundColor: '#eff6ff',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      borderLeft: '4px solid #2563eb'
    },
    grid2: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem'
    },
    grid3: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem'
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem 1.5rem',
      backgroundColor: '#1e3a8a',
      color: 'white',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.2s'
    },
    buttonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    },
    nav: {
      backgroundColor: '#f9fafb',
      padding: '1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid #e5e7eb'
    }
  };

  const slides = [
    {
      title: "DAWG SUPERLATIVE",
      subtitle: "Strategic Analysis & Award Presentation",
      content: (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <div style={{ fontSize: '3.75rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '2rem' }}>SCOTT</div>
          <div style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '2rem' }}>A McKinsey 7-Step Approach to Ultimate Excellence</div>
          <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '3rem' }}>CONFIDENTIAL | FOR INTERNAL USE ONLY</div>
        </div>
      )
    },
    {
      title: "1. PROBLEM DEFINITION",
      subtitle: "Identifying the Strategic Challenge",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={styles.blueBox}>
            <div style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Key Question:</div>
            <p style={{ fontSize: '1.25rem', margin: 0 }}>"Who among us has achieved peak DAWG status?"</p>
          </div>
          <div style={styles.grid2}>
            <div>
              <img src="/images/2.jpg" alt="Subject in retail environment" style={{ ...styles.img, height: '16rem' }} />
              <p style={{ fontSize: '0.75rem', color: '#6b7280', textAlign: 'center', marginTop: '0.5rem' }}>Figure 1.1: Subject displaying casual confidence</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '0.5rem', flex: 1 }}>
                <div style={{ fontWeight: '600', color: '#1e3a8a', marginBottom: '0.5rem' }}>Criteria Evaluated:</div>
                <ul style={{ fontSize: '0.875rem', paddingLeft: '1.5rem' }}>
                  <li>Intensity per capita</li>
                  <li>Disc commitment quotient</li>
                  <li>Hustle metrics (HM)</li>
                  <li>Competitive spirit index</li>
                </ul>
                <div style={{ fontWeight: '600', color: '#1e3a8a', marginTop: '1rem', marginBottom: '0.5rem' }}>Hypothesis:</div>
                <p style={{ fontSize: '0.875rem', margin: 0 }}>Scott demonstrates statistically significant DAWG characteristics across all measured dimensions</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2. STRUCTURE THE PROBLEM",
      subtitle: "The DAWG Framework™",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#1e3a8a', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
              D.A.W.G. Framework™
            </div>
          </div>
          <div style={styles.grid2}>
            <div style={{ backgroundColor: '#eff6ff', padding: '1.5rem', borderRadius: '0.5rem', borderTop: '4px solid #2563eb' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '0.5rem' }}>D</div>
              <div style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Determination</div>
              <p style={{ fontSize: '0.875rem', color: '#374151', margin: 0 }}>Relentless pursuit of the disc, even in high-wind scenarios</p>
            </div>
            <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '0.5rem', borderTop: '4px solid #16a34a' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#166534', marginBottom: '0.5rem' }}>A</div>
              <div style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Aggression</div>
              <p style={{ fontSize: '0.875rem', color: '#374151', margin: 0 }}>Calculated competitive intensity (within the spirit of the game)</p>
            </div>
            <div style={{ backgroundColor: '#faf5ff', padding: '1.5rem', borderRadius: '0.5rem', borderTop: '4px solid #9333ea' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#6b21a8', marginBottom: '0.5rem' }}>W</div>
              <div style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Will to Win</div>
              <p style={{ fontSize: '0.875rem', color: '#374151', margin: 0 }}>Unwavering focus on point conversion and defensive stops</p>
            </div>
            <div style={{ backgroundColor: '#fef2f2', padding: '1.5rem', borderRadius: '0.5rem', borderTop: '4px solid #dc2626' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#991b1b', marginBottom: '0.5rem' }}>G</div>
              <div style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Grit</div>
              <p style={{ fontSize: '0.875rem', color: '#374151', margin: 0 }}>Layout frequency exceeding industry benchmarks by 340%</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "3. PRIORITIZE THE ISSUES",
      subtitle: "Data-Driven Insights",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={styles.grid2}>
            <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <div style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '1rem' }}>Top 3 Critical Success Factors</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { num: 1, bg: '#dc2626', title: 'Vocal Leadership', desc: '87% increase in team "LET\'S GO" counts when Scott is on field' },
                  { num: 2, bg: '#ea580c', title: 'Physical Commitment', desc: 'Leads league in grass stains per game (GSPG: 12.4)' },
                  { num: 3, bg: '#ca8a04', title: 'Competitive Fire', desc: 'Maintains intensity even during 11-2 leads and 2-11 deficits' }
                ].map(item => (
                  <div key={item.num} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ backgroundColor: item.bg, color: 'white', borderRadius: '50%', width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>{item.num}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '600' }}>{item.title}</div>
                      <div style={{ fontSize: '0.875rem', color: '#4b5563' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/images/1.jpg" alt="Ultimate action shot" style={styles.img} />
              <p style={{ fontSize: '0.75rem', color: '#6b7280', textAlign: 'center', marginTop: '0.5rem' }}>Figure 3.1: Mid-game defensive intensity captured</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: '600' }}>DAWG COMPOSITE SCORE</div>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0.5rem 0' }}>9.7/10</div>
            <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Top 1% of all frisbee competitors analyzed</div>
          </div>
        </div>
      )
    },
    {
      title: "4. ANALYSIS PLAN",
      subtitle: "Quantitative Assessment Methodology",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={styles.grid3}>
            {[
              { value: '156%', label: 'Above-average hustle plays per game', bg: '#eff6ff', color: '#1e3a8a' },
              { value: '23', label: 'Layouts this season (team high)', bg: '#f0fdf4', color: '#166534' },
              { value: '∞', label: 'Competitive energy (unmeasurable)', bg: '#faf5ff', color: '#6b21a8' }
            ].map((stat, i) => (
              <div key={i} style={{ backgroundColor: stat.bg, padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: stat.color }}>{stat.value}</div>
                <div style={{ fontSize: '0.75rem', color: '#4b5563', marginTop: '0.5rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: '#f3f4f6', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '0.75rem' }}>Peer Testimonials (Sample n=8)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                '"That dude is such a dawg" - Anonymous Teammate A',
                '"Scott literally never stops" - Anonymous Teammate B',
                '"Is he okay? He seems intense" - Opponent',
                '"Pretty sure he\'d run through a brick wall for a disc" - Anonymous Teammate C'
              ].map((quote, i) => (
                <div key={i} style={{ backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.25rem', fontSize: '0.875rem', fontStyle: 'italic' }}>{quote}</div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "5. CONDUCT ANALYSIS",
      subtitle: "Competitive Benchmarking",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ textAlign: 'center', fontWeight: '600', fontSize: '1.125rem', marginBottom: '1rem' }}>DAWG Index vs. League Average</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Intensity', scott: 95, avg: 62, color: '#2563eb' },
              { label: 'Hustle', scott: 92, avg: 58, color: '#16a34a' },
              { label: 'Competitive Fire', scott: 98, avg: 55, color: '#dc2626' }
            ].map((metric, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                  <span>{metric.label}</span>
                  <span style={{ fontWeight: 'bold' }}>Scott: {metric.scott} | Avg: {metric.avg}</span>
                </div>
                <div style={{ backgroundColor: '#e5e7eb', borderRadius: '9999px', height: '1.5rem', position: 'relative' }}>
                  <div style={{ backgroundColor: metric.color, height: '1.5rem', borderRadius: '9999px', width: `${metric.scott}%`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'white' }}>Scott</div>
                  </div>
                </div>
                <div style={{ backgroundColor: '#9ca3af', borderRadius: '9999px', height: '1rem', width: `${metric.avg}%`, marginTop: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '0.75rem', color: 'white' }}>League Avg</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: '#fef3c7', borderLeft: '4px solid #ca8a04', padding: '1rem', marginTop: '1.5rem' }}>
            <div style={{ fontWeight: '600', fontSize: '0.875rem' }}>KEY INSIGHT:</div>
            <p style={{ fontSize: '0.875rem', margin: '0.25rem 0 0 0' }}>Scott operates in the 95th+ percentile across all DAWG dimensions</p>
          </div>
        </div>
      )
    },
    {
      title: "6. SYNTHESIZE FINDINGS",
      subtitle: "Executive Summary",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ background: 'linear-gradient(to right, #1e3a8a, #1e40af)', color: 'white', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Conclusion</div>
            <p style={{ fontSize: '1.125rem', margin: 0 }}>Based on rigorous quantitative and qualitative analysis, Scott demonstrates unparalleled DAWG characteristics that significantly exceed industry benchmarks.</p>
          </div>
          <div style={styles.grid3}>
            <div style={{ backgroundColor: '#f0fdf4', padding: '1rem', borderRadius: '0.5rem', border: '2px solid #16a34a' }}>
              <div style={{ fontWeight: 'bold', color: '#166534', marginBottom: '0.5rem' }}>✓ STRENGTHS</div>
              <ul style={{ fontSize: '0.875rem', paddingLeft: '1.5rem', margin: 0 }}>
                <li>Elite hustle metrics</li>
                <li>Consistent intensity</li>
                <li>Leadership presence</li>
                <li>Never gives up</li>
              </ul>
            </div>
            <div>
              <img src="/images/3.jpg" alt="International documentation" style={styles.img} />
              <p style={{ fontSize: '0.75rem', color: '#6b7280', textAlign: 'center', marginTop: '0.5rem' }}>Figure 6.1: Subject maintaining excellence abroad</p>
            </div>
            <div style={{ backgroundColor: '#fff7ed', padding: '1rem', borderRadius: '0.5rem', border: '2px solid #ea580c' }}>
              <div style={{ fontWeight: 'bold', color: '#9a3412', marginBottom: '0.5rem' }}>⚠ RISKS</div>
              <ul style={{ fontSize: '0.875rem', paddingLeft: '1.5rem', margin: 0 }}>
                <li>May intimidate opponents</li>
                <li>Sets unrealistic standards</li>
                <li>Could cause injury from over-hustle</li>
              </ul>
            </div>
          </div>
          <div style={{ backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#4b5563' }}>RECOMMENDATION</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', marginTop: '0.5rem' }}>AWARD DAWG SUPERLATIVE TO SCOTT</div>
          </div>
        </div>
      )
    },
    {
      title: "7. RECOMMENDATION",
      subtitle: "Next Steps & Action Plan",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={styles.grid2}>
            <div>
              <img src="/images/4.jpg" alt="The Champion" style={{ ...styles.img, height: '100%' }} />
              <p style={{ fontSize: '0.75rem', color: '#6b7280', textAlign: 'center', marginTop: '0.5rem' }}>Figure 7.1: Peak DAWG energy documented in Brussels</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'linear-gradient(to right, #fbbf24, #f59e0b, #f97316)', color: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>🏆</div>
                <div style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>SCOTT</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>ULTIMATE DAWG</div>
                <div style={{ fontSize: '0.875rem', marginTop: '1rem', opacity: 0.9 }}>Most Valuable Competitor | Season Champion</div>
              </div>
              <div style={{ backgroundColor: '#eff6ff', padding: '1.5rem', borderRadius: '0.5rem' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.75rem' }}>Implementation Plan:</div>
                <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    'Present award with appropriate reverence',
                    'Request Scott teach DAWG masterclass',
                    'Update team culture documentation',
                    'Mandate pre-game Scott highlight viewing'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                      <span style={{ fontWeight: 'bold' }}>{i + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center' }}>
            This presentation prepared by: Your Team's Analytics Department<br />
            Confidentiality: Can definitely be shared, Scott needs to know
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={{ fontSize: '0.875rem', fontWeight: '600' }}>ULTIMATE FRISBEE SUPERLATIVES</div>
          <div style={{ fontSize: '0.875rem' }}>Slide {currentSlide + 1} of {slides.length}</div>
        </div>

        <div style={styles.content}>
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={styles.title}>{slides[currentSlide].title}</h1>
            <div style={{ height: '4px', width: '5rem', backgroundColor: '#2563eb', marginBottom: '1rem' }}></div>
            <p style={styles.subtitle}>{slides[currentSlide].subtitle}</p>
          </div>
          <div>
            {slides[currentSlide].content}
          </div>
        </div>

        <div style={styles.nav}>
          <button
            onClick={prevSlide}
            style={{ ...styles.button, ...(currentSlide === 0 ? styles.buttonDisabled : {}) }}
            disabled={currentSlide === 0}
            onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#1e40af')}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1e3a8a'}
          >
            <ChevronLeft size={20} />
            Previous
          </button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: '0.75rem',
                  height: '0.75rem',
                  borderRadius: '50%',
                  backgroundColor: idx === currentSlide ? '#1e3a8a' : '#d1d5db',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            style={{ ...styles.button, ...(currentSlide === slides.length - 1 ? styles.buttonDisabled : {}) }}
            disabled={currentSlide === slides.length - 1}
            onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#1e40af')}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1e3a8a'}
          >
            Next
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DawgPresentation;