* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #0a0a0a;
  color: #fff;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
}

.app-container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  position: relative;
}

.stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle 3s infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.intro-page {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.intro-page.hidden {
  display: none;
}

.intro-message {
  font-size: 2em;
  color: #ffeaa7;
  margin-bottom: 50px;
  text-align: center;
  opacity: 0;
  animation: fadeInText 1.5s ease forwards;
}

@keyframes fadeInText {
  to { opacity: 1; }
}

.explode-btn {
  background: linear-gradient(135deg, #ffeaa7, #ffd700);
  color: #1a1a2e;
  border: none;
  padding: 25px 60px;
  font-size: 1.5em;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(255, 234, 167, 0.3);
  opacity: 0;
  animation: fadeInButton 1.5s ease 0.5s forwards;
}

@keyframes fadeInButton {
  to { opacity: 1; }
}

.explode-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(255, 234, 167, 0.5);
}

.explode-btn:active {
  transform: scale(0.95);
}

.explode-btn.exploding {
  display: none;
}

.particle {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  pointer-events: none;
  box-shadow: 0 0 10px currentColor;
}

.celebration-text {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4em;
  font-weight: 700;
  color: #ffeaa7;
  text-align: center;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  text-shadow: 0 0 20px rgba(255, 234, 167, 0.8);
}

.celebration-text.show {
  animation: celebrationPop 2s ease forwards;
}

@keyframes celebrationPop {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
}

.content {
  position: relative;
  z-index: 2;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
  display: none;
}

.content.visible {
  display: block;
  animation: fadeIn 1s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.header {
  text-align: center;
  padding: 60px 20px 50px;
}

.app-title {
  font-size: 3em;
  font-weight: 400;
  margin-bottom: 15px;
  color: #ffeaa7;
}

.subtitle {
  font-size: 1.3em;
  color: #ddd;
  opacity: 0.8;
}

.section {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin: 30px 0;
  display: none;
}

.section.active {
  display: block;
  animation: slideIn 0.5s ease;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.section-title {
  font-size: 2em;
  font-weight: 500;
  color: #ffeaa7;
  margin-bottom: 25px;
}

.section-text {
  line-height: 2;
  font-size: 1.2em;
  color: #e8e8e8;
}

.section-text p {
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  gap: 15px;
  margin: 40px 0;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-btn {
  background: rgba(255, 234, 167, 0.15);
  border: 2px solid rgba(255, 234, 167, 0.3);
  color: #ffeaa7;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-btn:hover {
  background: rgba(255, 234, 167, 0.25);
  border-color: #ffeaa7;
  transform: translateY(-2px);
}

.nav-btn.active {
  background: #ffeaa7;
  color: #1a1a2e;
  border-color: #ffeaa7;
}

.music-box {
  background: rgba(162, 155, 254, 0.1);
  border: 1px solid rgba(162, 155, 254, 0.3);
  padding: 30px;
  border-radius: 15px;
  margin: 30px 0;
  text-align: center;
}

.music-icon {
  font-size: 2.5em;
  margin-bottom: 15px;
}

.progress-indicator {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 40px 0 30px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 234, 167, 0.3);
  transition: all 0.3s ease;
}

.dot.active {
  background: #ffeaa7;
  width: 30px;
  border-radius: 5px;
}

.final-note {
  text-align: center;
  padding: 40px 20px;
  font-size: 1.3em;
  line-height: 2;
}

.heart {
  font-size: 2em;
  margin: 15px 0;
}

.photo-container {
  margin: 40px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

#asmaePic, #asmaePic1, #asmaePic2 {
  width: 100%;
  max-width: 500px;
  height: 500px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  object-fit: cover;
}

@media (max-width: 768px) {
  .content {
    padding: 20px;
  }
  
  .app-title {
    font-size: 2em;
  }
  
  .section {
    padding: 25px;
  }
  
  .section-title {
    font-size: 1.5em;
  }
  
  .section-text {
    font-size: 1.05em;
  }
  
  .nav-btn {
    padding: 12px 24px;
    font-size: 0.95em;
  }
  
  .celebration-text {
    font-size: 2em;
  }
  
  .intro-message {
    font-size: 1.3em;
  }
  
  #asmaePic, #asmaePic1, #asmaePic2 {
    max-width: 350px;
    height: 350px;
  }
}
