import React, { useState, useRef, useEffect } from 'react';

const PRESET_FAQS = [
  { q: 'What is QuantaSIP GIS Pvt. Ltd.?', a: 'QuantaSIP GIS Pvt. Ltd. is a leading provider of GIS solutions, cadastral mapping, land records, and geospatial services for infrastructure, agriculture, and more.' },
  { q: 'When was QuantaSIP GIS Pvt. Ltd. founded?', a: 'QuantaSIP GIS Pvt. Ltd. was established to provide innovative GIS solutions for infrastructure development across India. (The company is active and recognized as of 2023.)' },
  { q: 'Who is the Technical Director of QuantaSIP GIS Pvt. Ltd.?', a: 'The Technical Director is Javed Sheikh, who has been featured in Geospatial Artha Magazine Volume 2 and is recognized as an industry leader.' },
  { q: 'What awards has QuantaSIP GIS Pvt. Ltd. received?', a: 'QuantaSIP GIS Pvt. Ltd. has received the "Geospatia Startup of the Year Award for GeoSpatia-24" and the "Lokmat Achievers Award."' },
  { q: 'What are some major projects completed by QuantaSIP GIS Pvt. Ltd.?', a: 'The company has completed Google Map Data development, Pan India Highway data collection, and Geo Positioned Data Collection for all power towers of MSETCL. They are also a pan-India vendor for NHAI\'s GIS-enabled toll system.' },
  { q: 'Who are some of QuantaSIP GIS Pvt. Ltd.\'s key clients?', a: 'Key clients include Skymet Weather Pvt Ltd, Genesys International Ltd, and Satsure, as highlighted in their client testimonials.' },
  { q: 'How large is the QuantaSIP GIS Pvt. Ltd. team?', a: 'The company has a team of 80+ staff, including Geo Spatial Analysts, developers, data analysts, and subject matter experts (SMEs).' },
  { q: 'Where is QuantaSIP GIS Pvt. Ltd. headquartered?', a: '404, Wall Street 24, near McDonald\'s, Motiram Nagar, Warje, Pune, Maharashtra 411058, India.' },
  { q: 'How can I contact QuantaSIP GIS Pvt. Ltd. for business inquiries?', a: 'You can contact them via email at info@quantasip.com or by phone at +91 7517860524. There is also a contact form on their website.' },
  { q: 'What makes QuantaSIP GIS Pvt. Ltd. unique in the GIS industry?', a: 'QuantaSIP is recognized as one of the top 10 GIS companies in India by Business Outlook and is known for its expertise, innovation, and ability to scale for large infrastructure projects.' },
  { q: 'What services does QuantaSIP GIS Pvt. Ltd. offer?', a: 'Services include Cadastral Data Sets, Land Record Verification, API Services, Data Cleaning and Correction, Drone and Land Surveys, DGPS services, Geo-Referencing, and GIS Application Development.' },
  { q: 'What industries does QuantaSIP GIS Pvt. Ltd. serve?', a: 'QuantaSIP serves a wide range of industries, including BFSI (Banking, Financial Services, and Insurance), agriculture, infrastructure, surveying, and geospatial technology.' },
  { q: 'What is QuantaSIP\'s experience with government projects?', a: 'QuantaSIP is a pan-India vendor for NHAI (National Highways Authority of India) and has partnered on GIS-enabled toll systems and large-scale infrastructure data collection projects.' },
  { q: 'What is the company\'s approach to data quality?', a: 'QuantaSIP emphasizes clear, cleansed, and corrected maps, offering data cleaning and correction services to ensure the highest accuracy in all GIS deliverables.' },
  { q: 'Does QuantaSIP offer custom GIS application development?', a: 'Yes, QuantaSIP designs, builds, and maintains custom GIS applications to help clients capture, store, analyze, and visualize spatial data.' },
  { q: 'What surveying technologies does QuantaSIP use?', a: 'QuantaSIP utilizes drone surveys, land surveys, and DGPS (Differential GPS) services for precise geographic data collection.' },
  { q: 'How does QuantaSIP ensure the security and privacy of client data?', a: 'QuantaSIP follows strict privacy and data protection policies, as outlined in their Privacy Policy, to safeguard all client information.' },
  { q: 'Has QuantaSIP been featured in any industry publications?', a: 'Yes, Technical Director Javed Sheikh has been featured in Geospatial Artha Magazine Volume 2, highlighting the company\'s leadership in the GIS sector.' },
  { q: 'What is QuantaSIP\'s mission?', a: 'QuantaSIP\'s mission is to build a better tomorrow with innovative GIS solutions, supporting infrastructure development and digital transformation across India.' },
  { q: 'How can I apply for a job at QuantaSIP GIS Pvt. Ltd.?', a: 'You can visit the "Careers" section on their website to view current openings and submit your application.' },
  { q: 'What is QuantaSIP Pvt. Ltd.?', a: 'QuantaSIP Pvt. Ltd. is a leading provider of GIS solutions, cadastral mapping, land records, and geospatial services for infrastructure, agriculture, and more.' },
  { q: 'What services does QuantaSIP Pvt. Ltd. provide?', a: 'We offer GIS solutions, cadastral mapping, land record verification, geo-referencing, drone surveys, GIS application development, and more.' },
  { q: 'Where is QuantaSIP Pvt. Ltd. located?', a: '404, Wall Street 24, near McDonald\'s, Motiram Nagar, Warje, Pune, Maharashtra 411058, India.' },
  { q: 'How can I contact QuantaSIP Pvt. Ltd.?', a: 'You can email info@quantasip.com or call +91 7517860524.' },
  { q: 'What industries does QuantaSIP serve?', a: 'We serve infrastructure, agriculture, banking, government, utilities, and more.' },
  { q: 'Does QuantaSIP offer land record verification?', a: 'Yes, we offer land record verification and cadastral data services.' },
  { q: 'What is GIS?', a: 'GIS stands for Geographic Information System, a technology for capturing, storing, analyzing, and managing spatial and geographic data.' },
  { q: 'How does QuantaSIP use GIS?', a: 'We use GIS for mapping, land records, infrastructure planning, agriculture, and more.' },
  { q: "Can I get a demo or free trial of QuantaSIP's GIS platform?", a: 'Yes, you can request a free trial on our website or by contacting us.' },
  { q: "Who are QuantaSIP's major clients or partners?", a: 'Our clients include government agencies, banks, infrastructure companies, and agricultural organizations.' },
  { q: 'What makes QuantaSIP different from other GIS companies?', a: 'Our expertise, innovative technology, and end-to-end GIS solutions set us apart.' },
  { q: 'How do I apply for a job at QuantaSIP Pvt. Ltd.?', a: 'Visit our Careers page or email your resume to info@quantasip.com.' },
  { q: 'Does QuantaSIP provide support for government projects?', a: 'Yes, we have extensive experience supporting government GIS and mapping projects.' },
  { q: 'What is cadastral mapping?', a: 'Cadastral mapping is the process of creating maps that show property boundaries and land ownership.' },
  { q: 'How secure is my data with QuantaSIP?', a: 'We use industry-standard security practices to protect your data.' },
  { q: 'How do I request a quote for GIS services?', a: 'Contact us via our website or email info@quantasip.com for a quote.' },
  { q: 'What is geo-referencing?', a: 'Geo-referencing is aligning geographic data to a known coordinate system so it can be viewed, queried, and analyzed with other geographic data.' },
  { q: 'Does QuantaSIP offer drone surveys?', a: 'Yes, we provide drone surveys for accurate and efficient data collection.' },
  { q: 'What is land record digitization?', a: 'Land record digitization is converting paper-based land records into digital format for easier access and management.' },
  { q: 'Can QuantaSIP help with urban planning?', a: 'Yes, our GIS solutions support urban planning, zoning, and infrastructure development.' },
  { q: 'What is a cadastral database?', a: 'A cadastral database stores information about land parcels, ownership, and boundaries.' },
  { q: 'Does QuantaSIP provide training on GIS?', a: 'Yes, we offer GIS training and workshops for organizations and individuals.' },
  { q: 'What is spatial analysis?', a: 'Spatial analysis is the process of examining geographic patterns to understand relationships and trends.' },
  { q: 'How can GIS help agriculture?', a: 'GIS helps agriculture by mapping fields, monitoring crops, and optimizing resource use.' },
  { q: 'What is a digital map?', a: 'A digital map is an electronic representation of geographic data.' },
  { q: 'Does QuantaSIP offer custom GIS application development?', a: 'Yes, we develop custom GIS applications tailored to your needs.' },
  { q: 'What is DGPS?', a: 'DGPS stands for Differential Global Positioning System, which improves location accuracy.' },
  { q: 'How do I access my GIS data?', a: 'We provide secure online portals and applications for accessing your GIS data.' },
  { q: 'What is a land parcel?', a: 'A land parcel is a defined piece of land, often with a unique identifier.' },
  { q: 'Can QuantaSIP integrate GIS with other business systems?', a: 'Yes, we can integrate GIS with ERP, CRM, and other business systems.' },
  { q: 'What is a shapefile?', a: 'A shapefile is a popular geospatial vector data format for GIS software.' },
  { q: 'Does QuantaSIP provide satellite imagery?', a: 'Yes, we can source and process satellite imagery for your projects.' },
  { q: 'What is map digitization?', a: 'Map digitization is converting paper maps into digital format.' },
  { q: 'How do I get support for my GIS project?', a: 'Contact our support team via email or phone for assistance.' },
  { q: 'What is spatial data?', a: 'Spatial data is information about the location and shape of physical objects.' },
  { q: 'Does QuantaSIP offer mobile GIS solutions?', a: 'Yes, we develop mobile GIS applications for field data collection and analysis.' },
  { q: 'What is a GIS portal?', a: 'A GIS portal is a web-based platform for accessing and managing GIS data and applications.' },
  { q: 'Can QuantaSIP help with environmental mapping?', a: 'Yes, we provide GIS solutions for environmental monitoring and mapping.' },
  { q: 'What is a topographic map?', a: 'A topographic map shows elevation and landforms using contour lines.' },
  { q: 'Does QuantaSIP provide consulting services?', a: 'Yes, we offer GIS consulting for project planning, implementation, and optimization.' },
  { q: 'What is remote sensing?', a: 'Remote sensing is the process of collecting information about the Earth\'s surface using satellites or aircraft.' },
  { q: 'How accurate is QuantaSIP\'s GIS data?', a: 'We use high-precision methods and rigorous quality control to ensure the accuracy of our GIS data.' },
  { q: 'What is a GIS layer?', a: 'A GIS layer is a set of geographic data representing a specific theme, such as roads, land use, or elevation, that can be visualized and analyzed in a GIS application.' },
  { q: 'Can I visualize my data on a map?', a: 'Yes, our GIS solutions enable you to visualize and analyze your data on interactive digital maps.' },
  { q: 'Does QuantaSIP support open-source GIS?', a: 'Yes, we support and work with both proprietary and open-source GIS platforms.' },
  { q: 'What is attribute data in GIS?', a: 'Attribute data in GIS refers to information that describes the properties or characteristics of geographic features, such as names, types, or measurements.' },
  { q: 'How do I update my GIS data?', a: 'Contact our team to discuss data updates and maintenance.' },
  { q: 'What is a geodatabase?', a: 'A geodatabase is a database designed to store, query, and manage spatial data.' },
  { q: 'Does QuantaSIP offer cloud GIS solutions?', a: 'Yes, we provide cloud-based GIS platforms for easy access and collaboration.' },
  { q: 'What is spatial resolution?', a: 'Spatial resolution refers to the level of detail in a spatial dataset or image.' },
  { q: 'Can QuantaSIP help with disaster management?', a: 'Yes, our GIS solutions support disaster response, planning, and risk assessment.' },
  { q: 'What is a GIS dashboard?', a: 'A GIS dashboard is a visual interface for monitoring and analyzing spatial data in real time.' },
  { q: 'Does QuantaSIP provide data conversion services?', a: 'Yes, we convert data between different GIS formats.' },
  { q: 'What is a map projection?', a: 'A map projection is a method for representing the curved surface of the Earth on a flat map.' },
  { q: 'How do I get started with GIS?', a: 'Contact us for a consultation or training session to get started with GIS.' },
  { q: 'What is spatial database management?', a: 'Spatial database management involves storing and managing spatial data in databases.' },
  { q: 'Does QuantaSIP offer field data collection?', a: 'Yes, we provide solutions for efficient field data collection using mobile devices.' },
  { q: 'What is a GIS analyst?', a: 'A GIS analyst is a professional who analyzes spatial data and creates maps and reports.' },
  { q: 'Can QuantaSIP help with utility mapping?', a: 'Yes, we offer GIS solutions for mapping utilities like water, electricity, and gas.' },
  { q: 'What is a base map?', a: 'A base map provides background reference for other map layers.' },
  { q: 'Does QuantaSIP provide 3D mapping?', a: 'Yes, we offer 3D mapping and visualization services.' },
  { q: 'What is a spatial query?', a: 'A spatial query is a search for features based on their location or attributes.' },
  { q: 'How do I share my GIS data with others?', a: 'We provide secure sharing options through web portals and cloud platforms.' },
  { q: 'What is a GIS server?', a: 'A GIS server hosts and serves spatial data and applications over the web.' },
  { q: 'Does QuantaSIP offer map printing services?', a: 'Yes, we can print high-quality maps for your projects.' },
  { q: 'What is a spatial index?', a: 'A spatial index improves the speed of spatial queries in a database.' },
  { q: 'Can QuantaSIP help with land acquisition projects?', a: 'Yes, we support land acquisition and management with GIS.' },
  { q: 'What is a geospatial API?', a: 'A geospatial API allows developers to access and use spatial data in applications.' },
  { q: 'Does QuantaSIP provide support for custom GIS workflows?', a: 'Yes, we design and implement custom GIS workflows for your needs.' },
  { q: 'What is a spatial join?', a: 'A spatial join combines data from two layers based on their spatial relationship.' },
  { q: 'How do I visualize time-series data in GIS?', a: 'We offer tools for visualizing and analyzing time-series spatial data.' },
  { q: 'What is a geofence?', a: 'A geofence is a virtual boundary defined on a map for tracking or alerts.' },
  { q: 'Does QuantaSIP offer real-time GIS solutions?', a: 'Yes, we provide real-time data integration and visualization in GIS.' },
  { q: 'What is a spatial reference system?', a: 'A spatial reference system defines how spatial data is mapped to the Earth.' },
  { q: 'Can QuantaSIP help with asset management?', a: 'Yes, we offer GIS solutions for asset tracking and management.' },
  { q: 'What is a map layer?', a: 'A map layer is a set of related geographic data displayed together on a map.' },
  { q: 'Does QuantaSIP provide support for open data?', a: 'Yes, we can help you use and publish open geospatial data.' },
  { q: 'What is a spatial model?', a: 'A spatial model is a mathematical representation of spatial relationships and processes.' },
  { q: 'How do I request a GIS consultation?', a: 'Contact us via our website or email to request a consultation.' },
  { q: 'What is a GIS web map?', a: 'A GIS web map is an interactive map accessible through a web browser.' },
  { q: 'Does QuantaSIP offer support for remote teams?', a: 'Yes, our cloud GIS solutions support remote collaboration.' },
  { q: 'What is a spatial dataset?', a: 'A spatial dataset contains geographic features and their attributes.' },
  { q: 'Can QuantaSIP help with transportation mapping?', a: 'Yes, we provide GIS solutions for transportation planning and analysis.' },
  { q: 'What is a spatial feature?', a: 'A spatial feature is a geographic object represented in GIS.' },
  { q: 'Does QuantaSIP provide support for IoT integration?', a: 'Yes, we can integrate GIS with IoT devices for real-time data.' },
  { q: 'What is a spatial dashboard?', a: 'A spatial dashboard visualizes key spatial metrics and trends.' },
  { q: 'How do I get a GIS project estimate?', a: 'Contact us with your project details for a custom estimate.' },
  { q: 'What is a spatial report?', a: 'A spatial report summarizes geographic data and analysis.' },
  { q: 'Does QuantaSIP offer support for education and research?', a: 'Yes, we support academic and research GIS projects.' },
  { q: 'What is a spatial app?', a: 'A spatial app is a software application that uses geographic data.' },
  { q: 'Can QuantaSIP help with smart city projects?', a: 'Yes, we provide GIS solutions for smart city planning and management.' },
  { q: 'What is a spatial alert?', a: 'A spatial alert notifies users of events or changes in a geographic area.' },
  { q: 'Does QuantaSIP provide support for spatial data standards?', a: 'Yes, we ensure compliance with industry spatial data standards.' },
  { q: 'What is a spatial workflow?', a: 'A spatial workflow is a sequence of GIS tasks to achieve a goal.' },
  { q: 'How do I get started with QuantaSIP?', a: 'Visit our website or contact us to discuss your GIS needs.' },
  { q: 'What is a spatial API?', a: 'A spatial API provides programmatic access to spatial data and functions.' },
  { q: 'Does QuantaSIP offer support for spatial data migration?', a: 'Yes, we help migrate your spatial data to new platforms.' },
  { q: 'What is a spatial analysis tool?', a: 'A spatial analysis tool helps analyze and visualize geographic data.' },
  { q: 'Can QuantaSIP help with field workforce management?', a: 'Yes, we offer GIS solutions for managing field teams and assets.' },
  { q: 'What is a spatial visualization?', a: 'Spatial visualization is the graphical representation of spatial data.' },
  { q: 'Does QuantaSIP provide support for spatial data quality?', a: 'Yes, we offer data quality assessment and improvement services.' },
  { q: 'What is a spatial data warehouse?', a: 'A spatial data warehouse stores large volumes of spatial data for analysis.' },
  { q: 'How do I schedule a GIS demo?', a: 'Contact us to schedule a personalized GIS demo.' },
  { q: 'What is a spatial data service?', a: 'A spatial data service provides access to spatial data over the web.' },
  { q: 'Does QuantaSIP offer support for spatial data publishing?', a: 'Yes, we help publish your spatial data for public or private use.' },
  { q: 'What is a spatial data catalog?', a: 'A spatial data catalog organizes and describes available spatial datasets.' },
  { q: 'How do I get technical support from QuantaSIP?', a: 'Contact our support team via email or phone for technical assistance.' },
  { q: 'What is a spatial data portal?', a: 'A spatial data portal is a web platform for accessing spatial data and services.' },
  { q: 'Does QuantaSIP provide support for spatial data visualization?', a: 'Yes, we offer advanced visualization tools for spatial data.' },
  { q: 'What is a spatial data policy?', a: 'A spatial data policy defines rules for managing and sharing spatial data.' },
  { q: "How do I learn more about QuantaSIP's services?", a: 'Visit our website or contact us for more information.' }
];

const BOT_AVATAR = 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png';
const USER_AVATAR = 'https://www.gravatar.com/avatar/?d=mp&s=48';

const BOT_NAME = 'QuantaBot';

function getOrCreateUserId() {
  let userId = localStorage.getItem('quanta_user_id');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('quanta_user_id', userId);
  }
  return userId;
}

function FAQChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: `Hi! I'm ${BOT_NAME}, your QuantaSIP FAQ Assistant. Please select a question below or search for a topic:`, faqs: PRESET_FAQS }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [filteredFaqs, setFilteredFaqs] = useState(PRESET_FAQS);
  const chatEndRef = useRef(null);

  // Track number of questions asked in this session
  const [questionCount, setQuestionCount] = useState(() => {
    return parseInt(sessionStorage.getItem('faq_question_count') || '0', 10);
  });
  const [bonusGiven, setBonusGiven] = useState(() => {
    return sessionStorage.getItem('faq_bonus_given') === 'true';
  });

  // Award coins for FAQ usage
  const awardFaqCoin = async (count) => {
    const userId = getOrCreateUserId();
    // 1 coin for each question
    await fetch('http://localhost:5005/api/award-coins', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId, coins: count, source: 'faq_question' }),
    });
    window.dispatchEvent(new Event('quanta-coin-update'));
  };
  // Award bonus coins (10) if more than 10 questions and not already given
  const awardFaqBonus = async () => {
    const userId = getOrCreateUserId();
    await fetch('http://localhost:5005/api/award-coins', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId, coins: 10, source: 'faq_bonus' }),
    });
    window.dispatchEvent(new Event('quanta-coin-update'));
    setBonusGiven(true);
    sessionStorage.setItem('faq_bonus_given', 'true');
  };

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  // Animation for open/close
  const chatBoxAnim = {
    transition: 'all 0.35s cubic-bezier(.68,-0.55,.27,1.55)',
    transform: open ? 'scale(1)' : 'scale(0.7)',
    opacity: open ? 1 : 0,
    pointerEvents: open ? 'auto' : 'none',
  };

  // Animation for messages
  const msgAnim = (i) => ({
    animation: `fadeInUp 0.5s ${0.05 * i + 0.1}s both` // staggered
  });

  // Show loader for 1 second before showing answer
  const showAnswer = (answer) => {
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: 'bot', text: answer }]);
      setLoading(false);
    }, 1000);
  };

  // Handle FAQ selection
  const handleFaqSelect = async (faq) => {
    setMessages((msgs) => [...msgs, { from: 'user', text: faq.q }]);
    setLoading(true);
    showAnswer(faq.a);
    // Award 1 coin for this question
    const newCount = questionCount + 1;
    setQuestionCount(newCount);
    sessionStorage.setItem('faq_question_count', newCount);
    await awardFaqCoin(1);
    // Award bonus if more than 10 questions and not already given
    if (newCount > 10 && !bonusGiven) {
      await awardFaqBonus();
    }
  };

  // Handle search input for autocomplete
  const handleInputChange = (e) => {
    const val = e.target.value;
    setInput(val);
    setFilteredFaqs(PRESET_FAQS.filter(faq => faq.q.toLowerCase().includes(val.toLowerCase())));
  };

  // Handle user submitting a custom question
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    const question = input.trim();
    if (!question) return;
    setMessages((msgs) => [...msgs, { from: 'user', text: question }]);
    setInput('');
    setLoading(true);
    // Try to find a matching FAQ
    const match = PRESET_FAQS.find(faq => faq.q.toLowerCase() === question.toLowerCase());
    if (match) {
      showAnswer(match.a);
    } else {
      // Send to backend as unanswered question
      try {
        await fetch('http://localhost:5005/api/faq-question', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question }),
        });
      } catch (err) {
        // Optionally handle error
      }
      showAnswer("Thank you for your question! Our team will review it and get back to you soon.");
    }
    // Award 1 coin for this question
    const newCount = questionCount + 1;
    setQuestionCount(newCount);
    sessionStorage.setItem('faq_question_count', newCount);
    await awardFaqCoin(1);
    // Award bonus if more than 10 questions and not already given
    if (newCount > 10 && !bonusGiven) {
      await awardFaqBonus();
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes faqDot {
          0%, 80%, 100% { opacity: 0.2; transform: scale(1); }
          40% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes borderGlow {
          0% { box-shadow: 0 0 4px 0.5px #90caf9, 0 0 0 0 #183153; }
          50% { box-shadow: 0 0 8px 2px #183153, 0 0 0 0 #90caf9; }
          100% { box-shadow: 0 0 4px 0.5px #90caf9, 0 0 0 0 #183153; }
        }
        .faq-glass {
          background: rgba(227, 242, 253, 0.65);
          border-radius: 8px;
          backdrop-filter: blur(16px) saturate(1.5);
          /* No border or box-shadow for a fully open look */
          overflow-x: hidden;
        }
        .faq-header {
          background: linear-gradient(90deg, #183153 60%, #90caf9 100%);
          color: #fff;
          padding: 16px 20px;
          font-weight: 700;
          font-size: 1.15rem;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 0;
          box-shadow: 0 2px 12px 0 rgba(25,118,210,0.10);
        }
        .faq-message {
          transition: background 0.3s, color 0.3s, box-shadow 0.3s;
          word-break: break-word;
          white-space: pre-line;
        }
        .faq-message-bot {
          background: rgba(255,255,255,0.85);
          color: #222;
          box-shadow: 0 2px 8px rgba(44,62,80,0.08);
        }
        .faq-message-user {
          background: rgba(25,118,210,0.85);
          color: #fff;
          box-shadow: 0 2px 8px rgba(25,118,210,0.12);
        }
        .faq-fade-in {
          animation: fadeInUp 0.5s both;
        }
        .faq-search {
          background: rgba(255,255,255,0.7);
          border: 1.5px solid #90caf9;
          box-shadow: 0 1px 4px 0 rgba(25,118,210,0.07);
          border-radius: 8px;
          padding: 8px 10px;
          font-size: 14px;
          margin: 10px 0;
          width: 100%;
          color: #183153;
          outline: none;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .faq-search:focus {
          border: 1.5px solid #183153;
          box-shadow: 0 0 0 2px #90caf9;
        }
        .faq-faq-btn {
          display: block;
          width: 100%;
          text-align: left;
          background: rgba(227,242,253,0.7);
          color: #183153;
          border: 1px solid #90caf9;
          border-radius: 6px;
          padding: 7px 12px;
          margin-bottom: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background 0.2s, color 0.2s, transform 0.18s;
        }
        .faq-faq-btn:hover {
          background: #1976d2;
          color: #fff;
          transform: translateY(-2px) scale(1.03);
        }
        .faq-fab {
          background: linear-gradient(135deg, #183153 60%, #90caf9 100%);
          color: #fff;
          border: none;
          border-radius: 16px;
          width: 64px;
          height: 64px;
          box-shadow: 0 8px 32px 0 rgba(30,64,175,0.15);
          font-size: 32px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s, box-shadow 0.4s;
        }
        .faq-fab:hover {
          box-shadow: 0 12px 40px 0 rgba(25,118,210,0.35);
          transform: scale(1.08);
        }
        .faq-no-x-scroll {
          overflow-x: hidden !important;
        }
        .faq-no-x-scroll::-webkit-scrollbar {
          height: 0 !important;
        }
      `}</style>
      <div style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 9999 }}>
        {open ? (
          <div className="faq-glass faq-no-x-scroll" style={{ width: 340, height: 420, maxWidth: '90vw', display: 'flex', flexDirection: 'column', overflow: 'hidden', ...chatBoxAnim }}>
            <div className="faq-header">
              <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img src={BOT_AVATAR} alt="QuantaBot" style={{ width: 32, height: 32, borderRadius: '50%', background: '#fff', border: '2px solid #1976d2', objectFit: 'cover', marginRight: 6 }} />
                {BOT_NAME}
              </span>
              <button onClick={() => setOpen(false)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer', transition: 'color 0.2s', boxShadow: 'none' }}>&times;</button>
            </div>
            <div className="faq-no-x-scroll" style={{ flex: 1, padding: 16, background: 'transparent', overflowY: 'auto', maxHeight: 320, overflowX: 'hidden' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 12, flexDirection: msg.from === 'user' ? 'row-reverse' : 'row', ...msgAnim(i) }}>
                  <div className={`faq-message faq-fade-in ${msg.from === 'user' ? 'faq-message-user' : 'faq-message-bot'}`} style={{ borderRadius: 10, padding: '10px 16px', maxWidth: 220, fontSize: 15, wordBreak: 'break-word', transition: 'all 0.3s', whiteSpace: 'pre-line' }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && <div style={{ color: '#1976d2', textAlign: 'center', fontSize: 18, animation: 'fadeInUp 0.4s both', margin: '12px 0' }}>
                <span style={{ display: 'inline-block', width: 32 }}>
                  <span className="faq-loader-dot" style={{ animation: 'faqDot 1s infinite', marginRight: 2 }}>•</span>
                  <span className="faq-loader-dot" style={{ animation: 'faqDot 1s 0.2s infinite', marginRight: 2 }}>•</span>
                  <span className="faq-loader-dot" style={{ animation: 'faqDot 1s 0.4s infinite' }}>•</span>
                </span>
              </div>}
              {/* Searchable dropdown for FAQ selection */}
              {!loading && (
                <>
                  <form onSubmit={handleUserSubmit} style={{ margin: 0 }}>
                  <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Search a question..."
                    className="faq-search"
                  />
                  </form>
                  <div className="faq-no-x-scroll" style={{ maxHeight: 120, overflowY: 'auto', marginBottom: 8, overflowX: 'hidden' }}>
                    {filteredFaqs.map((faq, idx) => (
                      <button key={idx} onClick={() => handleFaqSelect(faq)} className="faq-faq-btn">{faq.q}</button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <button onClick={() => setOpen(true)} className="faq-fab" title="Chat with QuantaBot" style={{ padding: 0 }}>
            <img src={BOT_AVATAR} alt="QuantaBot" style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff', border: '2px solid #1976d2', objectFit: 'cover' }} />
          </button>
        )}
      </div>
    </>
  );
}

export default FAQChatWidget; 