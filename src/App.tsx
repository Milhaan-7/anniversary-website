import { useRef, useState } from "react";
import { MotionConfig } from "framer-motion";
import { useLenis } from "./lib/useLenis";
import Opening from "./components/Opening";
import QuranVerse from "./components/QuranVerse";
import MeetAbu from "./components/MeetAbu";
import MeetSaachi from "./components/MeetSaachi";
import TheirStory from "./components/TheirStory";
import LifeOfGiving from "./components/LifeOfGiving";
import FamilySection from "./components/FamilySection";
import TravelMemories from "./components/TravelMemories";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import Dua from "./components/Dua";
import Finale from "./components/Finale";
import MusicPlayer, { type MusicPlayerHandle } from "./components/MusicPlayer";
import { verses } from "./data/content";

function App() {
  useLenis();
  const [journeyStarted, setJourneyStarted] = useState(false);
  const musicRef = useRef<MusicPlayerHandle>(null);

  function handleBegin() {
    setJourneyStarted(true);
    musicRef.current?.start();
  }

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative">
        <Opening onBegin={handleBegin} />

        {journeyStarted && (
          <div>
            <QuranVerse verseRef={verses[0].ref} text={verses[0].text} eyebrow="A Verse on Marriage" />
            <MeetAbu />
            <MeetSaachi />
            <QuranVerse verseRef={verses[1].ref} text={verses[1].text} eyebrow="A Verse on Companionship" />
            <TheirStory />
            <LifeOfGiving />
            <FamilySection />
            <TravelMemories />
            <Gallery />
            <Letter />
            <Dua />
            <Finale />
          </div>
        )}

        <MusicPlayer ref={musicRef} visible={journeyStarted} />
      </main>
    </MotionConfig>
  );
}

export default App;
