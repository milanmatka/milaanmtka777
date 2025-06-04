import { useState, useEffect } from 'react';
import Logo from '../assets/Logo.jpeg'

const SattaMatkaWebsite = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const liveResults = [
    { name: "MILAN MORNING", number: "450-99-126", time: "10:30 AM - 11:30 AM" },
    { name: "SRIDEVI", number: "140-57-467", time: "11:35 AM - 12:35 PM" },
    { name: "MAIN BAZAR MORNING", number: "569-04-220", time: "11:15 AM - 12:15 PM" },
    { name: "KALYAN MORNING", number: "238-32-129", time: "11:00 AM - 12:02 PM" },
    { name: "PADMAVATHI", number: "279-84-158", time: "11:40 AM - 12:40 PM" },
    { name: "MADHURI", number: "500-52-237", time: "11:45 AM - 12:45 PM", highlight: true },
    { name: "RAJDHANI MORNING [main]", number: "188-72-246", time: "11:25 AM - 12:55 PM" },
    { name: "SRIDEVI MORNING", number: "570-29-126", time: "10:00 AM - 11:00 AM" },
    { name: "MAHARANI", number: "134-84-347", time: "12:15 PM - 02:15 PM" },
    { name: "KARNATAKA DAY", number: "336-24-590", time: "10:00 AM - 11:00 AM", highlight: true },
    { name: "TIME BAZAR MORNING", number: "200-27-160", time: "11:10 AM - 12:10 PM" }
  ];

  const starLineResults = [
    { time: "09:05 AM", result: "479-0" },
    { time: "10:05 AM", result: "455-4" },
    { time: "11:05 AM", result: "158-4" },
    { time: "12:05 PM", result: "389-0" },
    { time: "01:05 PM", result: "558-8" },
    { time: "02:05 PM", result: "129-2" },
    { time: "03:05 PM", result: "134-8" },
    { time: "04:05 PM", result: "890-7" }
  ];

  const rajshreeResults = [
    { time: "09:30 AM", result: "110-2" },
    { time: "10:30 AM", result: "355-3" },
    { time: "11:30 AM", result: "145-0" },
    { time: "12:30 PM", result: "245-1" },
    { time: "01:30 PM", result: "367-6" },
    { time: "02:30 PM", result: "150-6" },
    { time: "03:30 PM", result: "780-5" },
    { time: "04:30 PM", result: "789-4" }
  ];

  const freeGameData = {
    "MILAN MORNING": {
      ank: "1-6-3-8",
      numbers: "155-556-880-238-288, 13-18-63-68-31-36-81-86"
    },
    "KALYAN MORNING": {
      ank: "4-9-5-0",
      numbers: "400-900-230-280-118, 45-40-95-90-54-59-04-09"
    },
    "TIME BAZAR": {
      ank: "*-*-*-*",
      numbers: "***-***-***-***-***, ***-***-***-***-***"
    },
    "MILAN DAY": {
      ank: "*-*-*-*",
      numbers: "***-***-***-***-***, ***-***-***-***-***"
    }
  };

  const kalyanData = [
    { day: "सोम", "3": "689/35", "5": "366/53", "7": "223/78", "8": "666/87" },
    { day: "मंगल", "2": "156/27", "7": "467/72", "8": "477/89", "9": "333/96" },
    { day: "बुध", "3": "779/37", "7": "359/73", "8": "134/89", "9": "478/98" },
    { day: "गुरु", "3": "779/35", "5": "168/53", "7": "133/79", "9": "338/97" },
    { day: "शुक", "5": "122/56", "6": "277/65", "7": "269/78", "8": "189/87" },
    { day: "शनि", "2": "138/25", "5": "122/52", "7": "467/79", "9": "234/97" }
  ];

  const kalyanNightData = [
    { day: "सोम", "3": "445/36", "6": "169/63", "8": "990/89", "9": "360/98" },
    { day: "मंगल", "3": "148/34", "4": "43/339", "5": "56/189", "6": "85/568" },
    { day: "बुध", "0": "127/05", "5": "339/50", "8": "89/222", "9": "68/89" },
    { day: "गुरु", "2": "246/25", "5": "168/52", "6": "67/557", "7": "76/76" },
    { day: "शुक", "1": "560/16", "6": "259/61", "8": "260/89", "9": "568/98" }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-200 to-orange-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 border-4 border-red-600 rounded-lg mx-2 mt-2">
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-20 h-20 rounded mr-3" />
          </div>
          <div className="text-right">
            <h1 className="text-3xl-large font-bold text-pink-500">Milaan<span className="text-white">Matka 777</span></h1>
          </div>
        </div>
        <div className="text-center text-blue-600 font-semibold pb-2 text-lg-large">
          !! Welcome to Milaan Matka 777 international !! Satta Matka Fast Result
        </div>
      </div>

      {/* Service Description */}
      <div className="mx-2 mt-2 bg-orange-200 border-2 border-red-500 rounded p-2 text-base-large text-center">
        <strong>Satta Matka Milaan Matka 777.net Kalyan Matka Result</strong><br />
        Milaan Matka 777.Service is the No. 1 Matka Sites welcomes you full-heartedly. Here below you can find the perfect guess by the top guesser along with the Fast Matka Result too. Aaj Ka Satta Kalyan Fix Single Jodi free update here you find top Matka Market of India Kalyan Main Milan Rajdhani "kalyan Matka Tips "fast Matka Result "kalyan Main Rajdhani Matka Chart "Matka Guessing by Milaan Matka 777 By App Best Matka Site By Milaan Matka 777 143
      </div>

      {/* Today Lucky Number */}
      <div className="mx-2 mt-2 bg-pink-500 text-white text-center py-2 rounded font-bold text-lg-large">
        Today Lucky Number
      </div>

      <div className="mx-2 bg-orange-200 border-2 border-red-500 rounded-b p-4">
        <div className="flex justify-between">
          <div className="text-center">
            <div className="text-blue-600 font-bold text-lg-large">Golden Ank</div>
            <div className="text-xl-large font-bold">2-7-3-8</div>
          </div>
          <div className="text-center">
            <div className="text-blue-600 font-bold text-lg-large">Final Ank</div>
            <div className="text-sm">
              <div>MAJHURI - 4</div>
              <div>SRIDEVI MORNING - 2</div>
              <div>KARNATAKA DAY - 2</div>
            </div>
          </div>
        </div>
      </div>

      {/* Online Matka Play Section */}
      <div className="mx-2 mt-2 bg-red-600 text-white text-center py-3 rounded">
        <div className="text-yellow-300 mb-2">अब सभी मटका बाजार देखो आनलाइन ऐप पर राज देखो रोज कमाओ आभी डाउनलोड करे</div>
        <div className="bg-blue-600 rounded-full px-4 py-2 inline-block mb-2">
          <a
            href="https://drive.google.com/file/d/1umNTVp61AXvw1Jl0rP1Pyuo6Sh04MtOY/view?usp=sharing"
            target="_blank"
          >

            🌐 Online Matka Play 🌐
          </a>
        </div>
        <div>Back Again With New Options - 100% Trusted</div>
        <div>Fast Payin - Instant Withdraw</div>
      </div>

      {/* Live Results */}
      <div className="mx-2 mt-2">
        <div className="bg-pink-500 text-white text-center py-2 rounded-t font-bold">
          ⭐LIVE RESULT⭐
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-2">
          <div className="text-center mb-2">
            <div className="font-bold">Sabse Tezz Live Result Yahi Milega</div>
            <div className="text-blue-600 font-bold">SUPREME NIGHT</div>
            <div className="text-red-600">Loading...</div>
            <button className="bg-blue-600 text-white px-3 py-1 rounded mt-1 text-sm">Refresh</button>
          </div>

          {liveResults.map((result, index) => (
            <div key={index} className={`border-2 border-red-500 rounded p-2 mb-2 text-center ${result.highlight ? 'bg-yellow-300' : 'bg-orange-100'}`}>
              <div className="flex justify-between items-center">
                <button className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Jodi</button>
                <div>
                  <div className="font-bold text-blue-600">{result.name}</div>
                  <div className="font-bold text-lg-large">{result.number}</div>
                  <div className="text-sm">{result.time}</div>
                </div>
                <button className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Panel</button>
              </div>
              {result.name === "TEEN PATTI" && (
                <div className="mt-2">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Refresh</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Notice Section */}
      <div className="mx-2 mt-2 bg-orange-200 border-2 border-red-500 rounded p-3">
        <div className="text-center">
          <div className="text-pink-500 font-bold">⭐ NOTICE ⭐</div>
          <div className="text-pink-500 font-bold">⭐ CHANGE IN TIME ⭐</div>
          <div className="text-red-600 font-bold">DATE 02/06/2025 (MONDAY)</div>
          <div className="text-red-600">KALYAN NIGHT ⇒ 09:30 PM - 11:30 PM</div>
          <div className="text-red-600">TARA MUMBAI DAY ⇒ 01:30 PM - 03:30 PM</div>
          <div className="text-red-600">TARA MUMBAI NIGHT ⇒ 08:30 PM - 10:30 PM</div>
        </div>
      </div>

      {/* Support Notice */}
      <div className="mx-2 mt-2 bg-red-600 text-white text-center py-3 rounded">
        <div className="text-yellow-300">⭐ NOTICE ⭐</div>
        <div>अपना बाजार Milaan Matka 777 वेबसाइट में दिखवाने</div>
        <div>के लिए आप हमें ईमेल करे</div>
        <div className="text-blue-300">Email : support@milaanmatka777.net</div>
        <div>धन्यवाद</div>
      </div>

      {/* Keywords */}
      <div className="mx-2 mt-2 bg-orange-200 border-2 border-red-500 rounded p-2 text-xs text-center">
        KALYAN MATKA | MATKA RESULT | KALYAN MATKA TIPS | SATTA MATKA | MATKA.COM | MATKA PANA JODI TODAY | BATTA SATKA | MATKA PATTI JODI NUMBER | MATKA RESULTS | MATKA CHART | MATKA JODI | SATTA.COM | FULL RATE GAME | MATKA GAME | MATKA WAPKA | ALL MATKA RESULT LIVE ONLINE | MATKA RESULT | KALYAN MATKA RESULT | DPBOSS MATKA 143 | MAIN MATKA
      </div>

      {/* Starline Results */}
      <div className="mx-2 mt-2">
        <div className="bg-pink-500 text-white text-center py-2 rounded-t font-bold">
          WORLD ME SABSE FAST SATTA MATKA RESULT
        </div>

        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-2">
          <div className="bg-yellow-300 text-center py-2 rounded font-bold mb-4">
            MAIN STARLINE
          </div>

          <table className="w-full mb-4">
            <thead>
              <tr className="bg-orange-300">
                <th className="border border-red-500 p-2">Time</th>
                <th className="border border-red-500 p-2">Result</th>
                <th className="border border-red-500 p-2">Time</th>
                <th className="border border-red-500 p-2">Result</th>
              </tr>
            </thead>
            <tbody>
              {starLineResults.map((result, index) => (
                <tr key={index}>
                  <td className="border border-red-500 p-2 text-center">{result.time}</td>
                  <td className="border border-red-500 p-2 text-center font-bold">{result.result}</td>
                  <td className="border border-red-500 p-2 text-center">
                    {rajshreeResults[index]?.time || ''}
                  </td>
                  <td className="border border-red-500 p-2 text-center font-bold">
                    {rajshreeResults[index]?.result || ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bg-pink-500 text-white text-center py-2 rounded font-bold mb-2">
            Mumbai Rajshree Star Line Result
          </div>
        </div>
      </div>

      {/* Special Game Zone */}
      <div className="mx-2 mt-2">
        <div className="bg-red-500 text-white text-center py-2 rounded-t font-bold">
          Milaan Matka 777 Special Game Zone
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-2">
          <div className="text-center text-purple-600 mb-2">Milaan Matka 777 Guessing Forum (Post)</div>
          <div className="space-y-1 text-center">
            <div className="text-purple-600">All market free fix game</div>
            <div className="text-purple-600">Ratan Khatri Fix Panel Chart</div>
            <div className="text-purple-600">Matka Final Number Trick Chart</div>
            <div className="text-purple-600">EverGreen Trick Zone And Matka Tricks By Milaan Matka 777</div>
          </div>
        </div>
      </div>

      {/* Matka Jodi List */}
      <div className="mx-2 mt-2">
        <div className="bg-red-500 text-white text-center py-2 rounded-t font-bold">
          Matka Jodi List
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-2">
          <div className="space-y-1 text-center">
            <div className="text-purple-600">Matka Jodi Count Chart</div>
            <div className="text-purple-600">Dhanvarsha Daily Fix Open To Close</div>
            <div className="text-purple-600">Matka Jodi Family Chart</div>
            <div className="text-purple-600">Penal Count Chart</div>
            <div className="text-purple-600">Penal Total Chart</div>
            <div className="text-purple-600">All 220 Card List</div>
          </div>
        </div>
      </div>

      {/* Weekly Charts */}
      <div className="mx-2 mt-2">
        <div className="bg-pink-500 text-white text-center py-1 rounded-t font-bold text-sm">
          DpBoss Net Weekly Patti Or Penal Chart From 26-05-2024 To 01-06-2025 For Kalyan, Milan, Kalyan Night, Rajdhani, Time, Main Bazar, Mumbai Royal Night
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-2 text-sm">
          <div>1⇒470-146-128-579</div>
          <div>2⇒237-156-110-660</div>
          <div>3⇒256-139-229-300</div>
          <div>4⇒112-257-239-167</div>
          <div>5⇒249-159-113-780</div>
          <div>6⇒349-556-123-880</div>
          <div>7⇒368-449-467-890</div>
          <div>8⇒288-189-224-468</div>
          <div>9⇒289-225-234-478</div>
          <div>0⇒145-460-136-550</div>
        </div>
      </div>

      {/* Free Game Zone */}
      <div className="mx-2 mt-2">
        <div className="bg-pink-500 text-white text-center py-2 rounded-t font-bold">
          FREE GAME ZONE OPEN-CLOSE
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-2">
          <div className="text-center mb-4">
            <div>✓DATE:☀ : 01/06/2025 ☀</div>
            <div className="font-bold">FREE GUESSING DAILY</div>
            <div className="font-bold">OPEN TO CLOSE FIX ANK</div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {Object.entries(freeGameData).map(([game, data]) => (
              <div key={game} className="border-2 border-red-500 rounded">
                <div className="bg-green-600 text-white text-center py-2 font-bold text-sm">
                  ↪ {game}
                </div>
                <div className="p-2 text-center text-sm">
                  <div className="font-bold">{data.ank}</div>
                  <div className="text-xs">{data.numbers}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kalyan Charts */}

      {/* Kalyan Night/Main Bazar */}

      {/* Chart Links */}
      <div className="mx-2 mt-2">
        <div className="bg-pink-500 text-white text-center py-2 rounded-t font-bold">
          SATTA MATKA JODI CHART
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-2">
          <div className="space-y-1 text-center">
            <div className="text-blue-600">Time Chart</div>
            <div className="text-blue-600">Sridevi Chart</div>
            <div className="text-blue-600">Kalyan Morning Chart</div>
            <div className="text-blue-600">Madhuri Chart</div>
            <div className="text-blue-600">Kalyan Chart</div>
            <div className="text-blue-600">Sridevi Night Chart</div>
            <div className="text-blue-600">Kalyan Night Chart</div>
            <div className="text-blue-600">Old Main Mumbai Chart</div>
            <div className="text-blue-600">Main Bazar Chart</div>
            <div className="text-blue-600">Milan Morning Chart</div>
            <div className="text-blue-600">Milan Day Chart</div>
            <div className="text-blue-600">Milan Night Chart</div>
            <div className="text-blue-600">Madhuri Night Chart</div>
            <div className="text-blue-600">Rajdhani Night Chart</div>
          </div>
        </div>
      </div>

      {/* Panel Charts */}
      <div className="mx-2 mt-2">
        <div className="bg-pink-500 text-white text-center py-2 rounded-t font-bold">
          MATKA PANEL CHART
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-2">
          <div className="space-y-1 text-center">
            <div className="text-blue-600">Time Panel Chart</div>
            <div className="text-blue-600">Sridevi Panel Chart</div>
            <div className="text-blue-600">Kalyan Morning Panel Chart</div>
            <div className="text-blue-600">Madhuri Penal Chart</div>
            <div className="text-blue-600">Padmavathi Penal Chart</div>
            <div className="text-blue-600">Kalyan Penal Chart</div>
            <div className="text-blue-600">Sridevi Night Penal Chart</div>
            <div className="text-blue-600">Kalyan Night Penal Chart</div>
            <div className="text-blue-600">Old Main Mumbai Panel Chart</div>
            <div className="text-blue-600">Main Bazar Penal Chart</div>
            <div className="text-blue-600">Milan Morning Panel Chart</div>
            <div className="text-blue-600">Milan Day Penal Chart</div>
            <div className="text-blue-600">Milan Night Penal Chart</div>
            <div className="text-blue-600">Madhuri Night Panel Chart</div>
            <div className="text-blue-600">Rajdhani Night Panel Chart</div>
          </div>
        </div>
      </div>

      {/* Information Sections */}
      <div className="mx-2 mt-2">
        <div className="bg-blue-600 text-white text-center py-2 rounded font-bold">
          DIFFERENT VARIANTS OF MATKA GAMES
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-3 text-sm">
          <div className="mb-4">
            <strong>There Are Several Variants Of Matka Games That Have Emerged Over Time. Here Are Some Of The Popular Ones:</strong>
          </div>
          <div className="space-y-3">
            <div><strong>Single:</strong> In This Format The Player Needs To Bet On The Single Digit From 0 To 9 And If There Chosen Number Draws Out, They Win.</div>
            <div><strong>Jodi:</strong> In Jodi Player Need To Choose Two Numbers So That They Can Form Pair Of Number They Need To Choose From 00 To 99 And If There Selected Number Is Drawn Out, They Win.</div>
            <div><strong>Patti:</strong> Patti Is A Three-Digit Number Variant Where Players Bet On All Three Digits Of The Result. There Are Different Types Of Patti Bets, Including Single Patti, Double Patti, And Triple Patti.</div>
            <div><strong>Half Sangam:</strong> Half Sangam Is A Kind Of Combination Bet Which Includes One Number Chosen In Front The List Of Numbers And Pairs Along With He Other Number From The Second Set.</div>
            <div><strong>Full Sangam:</strong> The Full Sangam Is Just Like The Half Sangam As Player Select Two Numbers From Both Set And If It Is Drawn, They Win.</div>
            <div><strong>Cycle Patti:</strong> Cycle Patti Is A Variation Where Players Bet On A Set Of Three Numbers In A Specific Order. If Their Selected Cycle Matches The Result, They Win.</div>
          </div>
        </div>
      </div>

      {/* Kalyan Matka Strategy */}
      <div className="mx-2 mt-2">
        <div className="bg-blue-600 text-white text-center py-2 rounded font-bold">
          WHAT IS KALYAN MATKA AND ITS WINNING STRATEGY
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-3 text-sm">
          <div className="mb-3">
            <strong>Kalyan Matka Is A Popular Form Of Gambling That Originated In India, Focusing On The Opening, And Closing Rates Of Cotton Traded On The Bombay Cotton Exchange. Over Time, It Has Evolved Into A Game Where Player Bet On Numbers And Combinations, Like Other Matka Games. Here Are Some Tips For Playing Kalyan Matka:</strong>
          </div>
          <div className="space-y-2">
            <div><strong>1.</strong> Understand The Game Rules And Different Types Of Bets.</div>
            <div><strong>2.</strong> Analyze Past Results For Patterns, But Remember That Outcomes Are Based On Chance.</div>
            <div><strong>3.</strong> Set A Budget And Stick To It.</div>
            <div><strong>4.</strong> Diversify Your Bets To Minimize Risks.</div>
            <div><strong>5.</strong> Bet With Reasonable Amounts And Avoid Chasing Losses.</div>
            <div><strong>6.</strong> Control Your Emotions And Make Rational Decisions.</div>
            <div><strong>7.</strong> Stay Updated With The Latest Information And Market Trends.</div>
          </div>
        </div>
      </div>

      {/* Mumbai Matka */}
      <div className="mx-2 mt-2">
        <div className="bg-blue-600 text-white text-center py-2 rounded font-bold">
          WHAT IS MUMBAI MATKA?
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-3 text-sm">
          The variant of the Matka gambling game which originated in Mumbai, India is known as Mumbai Matka. The game is specifically associated with the city of Mumbai and hence is known as the Mumbai Matka. As other Matka games Mumbai Matka also revolves around the number and combinations.
        </div>
      </div>

      {/* Rajdhani Matka */}
      <div className="mx-2 mt-2">
        <div className="bg-blue-600 text-white text-center py-2 rounded font-bold">
          WHAT IS RAJDHANI MATKA?
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-3 text-sm">
          Rajdhani Matka is a very popular matka game and variant of Matka gambling in India. The game involves betting on number and combinations in Rajdhani market as player places the bets on various options such as single number or pair or even the three-digit number before the result gets declared. The games revolve on the similar format of Matka betting where two sets of number are drawn at a random. Even if you want to know how the result is declared or the winning number are determined based on the combination of two sets as the last digit of their products is determined as the winning number. Also, while playing the game, it is that you follow the local laws and regulations while participating in the Rajdhani Matka or any other Format of games.
        </div>
      </div>

      {/* Satta Chart Analysis */}
      <div className="mx-2 mt-2">
        <div className="bg-blue-600 text-white text-center py-2 rounded font-bold">
          WHAT IS SATTA CHART ANALYSIS?
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-3 text-sm">
          The Satta Chart Analysis is the study of historical Satta Matka to identify the patterns along with trends and number of frequencies. By using this it helps in making decisions when you select a number or the combination for future bets. Although it is very to remember that...
        </div>
      </div>

      {/* Additional FAQ Sections */}
      <div className="mx-2 mt-2 space-y-2">
        {[
          {
            title: "WHAT IS SATTA MATKA?",
            content: "Satta Matka Originated In India And Is One Of The Popular Forms Of Lottery And Gambling Games. The Game Involves Placing Bets On Different Numbers And Earning Potential Winning On The Outcome."
          },
          {
            title: "WHO IS DPBOSS",
            content: "DPBOSS Is Known For Providing The Best Tips And Guidance To Players Along With Expert Advice So That They Can Easily Make Informed Decisions On Placing Bets On The Numbers In Their Matka Games."
          },
          {
            title: "HOW DOES MATKA WORK?",
            content: "In Matka, Players Need To Choose A Specific Set Of Numbers From Any Predefined Range And Place Bets On These Numbers So That While Any Random Number Drawn If The Number Is The Same The Player Chooses, They Win."
          },
          {
            title: "WHAT IS KALYAN MATKA?",
            content: "Kalyan Matka Is Totally A Variant Of Satta Matka Which Mainly Focuses On Games Based On Opening And Closing Rates Of Cotton In The Bombay Cotton Exchange."
          },
          {
            title: "HOW CAN I CHECK THE MATKA RESULT?",
            content: "Matka Results Can Be Checked Through Various Online Platforms Or Websites That Are Totally Dedicated To Satta Matka Games. Various Formats Of Matka Gaming Results Are Declared On These Platforms For Ease."
          },
          {
            title: "WHAT IS MATKA CHART?",
            content: "The Matka Chart Refers To The Graphical Representation Of Any Previous Result And Trends Which In Matka Game Helps Players Analyze The Patterns Of Drawing And Make Predictions For Their Future Games."
          },
          {
            title: "WHAT IS THE DIFFERENCE BETWEEN MATKA AND SATTA?",
            content: "Satta Is A Broad Term That Refers To Any Type Of Gambling Games. The Matka Is A Specific Term Which Refers To A Game Involving Betting On Numbers That Are Drawn Out From The Matka."
          }
        ].map((faq, index) => (
          <div key={index}>
            <div className="bg-blue-600 text-white text-center py-2 rounded font-bold text-sm">
              {faq.title}
            </div>
            <div className="bg-orange-200 border-2 border-red-500 rounded-b p-2 text-xs">
              {faq.content}
            </div>
          </div>
        ))}
      </div>

      {/* Hindi FAQ Sections */}
      <div className="mx-2 mt-2 space-y-2">
        {[
          {
            title: "सट्टा मटका क्या है?",
            content: "सट्टा मटका एक जुआ है जो भारत में उत्पन्न हुआ था, जिसमें लोग नंबर एक्सचेंज में मुम्बई कॉटन एक्सचेंज की ओपनिंग और क्लोज़िंग दरों पर सट्टा लगाते जाते थी।"
          },
          {
            title: "सट्टा मटकाकैसे खेले?",
            content: "सट्टा मटका में खेलने के लिए आपकको नंबर चुनना होता है और उस पर सट्टा लगाना होता है। खेल में विभिन्न प्रकार होते हैं, जैसे कि सिंगल, जोड़ी, पन्ना, और अंगना।"
          },
          {
            title: "सट्टा मटकाकी जीतने के बाद कैसे बढ़ाए?",
            content: "सट्टा मटका की जीतने के बाद का बढ़ने के लिए निम्नको सलाहों को सुनवैं, इन्हारकों का पालन करे, और निरिक्षक चुना खेले।"
          },
          {
            title: "कल्याण मटका क्या होता है?",
            content: "कल्याण मटका एक प्रकार का सट्टा मटका बाजार है जो भारत में खेला जाता है। इसमें विभिन्न प्रकार की नरों पर सट्टा लगाई जाती है जैसे कि ओपन, क्लोज, जोड़ी आदि।"
          },
          {
            title: "मटका कैसे काम करता है?",
            content: "मटका में, खिलाड़ियों को किसी पूर्वनिर्धारित सीमा से एक विशिष्ट नेट के नंबर चुनने होते हैं और उन नंबरों पर सट्टा लगाना होता है, ताकि किसी भी रैंडम नंबर का हो वैसा नंबर यदि खिलाड़ी का चुना हुआ है, तो वह जीतता है।"
          },
          {
            title: "मटका के विशेष शब्द क्या है?",
            content: "सिंगल: सिंगल के लिए 0 से 9 तक का एक अंकेला अंका। उदाहरण के लिए 1। जोड़ी/पेयर: मटका के लिए 00 से 99 तक किसी भी दो अंकों का नेट, जैसे 63 या 84 इत्यादि। पट्टी/पन्ना: एक तीन-अंकीय पैटर्न चुना पैटर्न के रूप में आता है। तीनों तीन-अंकीय संधि पट्टीपन्ना होती है। हैबेत संकेतिक 3 अंकीय संख्याएं प्रणाम की जाती है।"
          }
        ].map((faq, index) => (
          <div key={index}>
            <div className="bg-blue-600 text-white text-center py-2 rounded font-bold text-sm">
              {faq.title}
            </div>
            <div className="bg-orange-200 border-2 border-red-500 rounded-b p-2 text-xs">
              {faq.content}
            </div>
          </div>
        ))}
      </div>

      {/* Keywords Section */}
      <div className="mx-2 mt-2">
        <div className="bg-pink-500 text-white text-center py-2 rounded-t font-bold">
          MATKA
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-2 text-xs">
          <div className="mb-2 text-blue-600">
            Madhur Matka | Satta Bazar | Satta Kurla | Satta Com | Satta Batta | Org Mobil Net In | Satta Master | Matka Game | Kapil Indian Matka | Matka Parivar 24 | Prabhat Matka | Tera Matka | Golden Matka | SattaMatka.Com | Madhur Matka satta result chart, satta khabar, matka india net, sattamataka, satta chart 2019, satta bazar result, satta live, satta bazar, satta matka Mumbai chart, satta live result,
          </div>
          <div className="text-red-600 text-xs leading-relaxed">
            dp boss net, dp satta, dpboss dpboss, indian satta matka, kalyan matka result today , matka boss, matka result live, matka satta result today, sattamatka com, satta boss, satta matka king, sattamatka, sattamatka result, sattamatta com, sattmatka sattmatka, star matka, tara matka, tara satta matka, worli matka, indian matka, matka live, kalyan guessing, satta fix, kalyan final ank, dp matka, dpboss net, sata mata com, सट्टा मटका, sattamatka 143, golden matka, satta matta matka 143, satta fast, kalyan open, satta 143, dpboss 143 guessing, dpboss satta, golden satta matka, satta bazar
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mx-2 mt-2">
        <div className="bg-pink-500 text-white text-center py-2 rounded-t font-bold">
          ☆DISCLAIMER☆
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-3 text-xs">
          <div className="text-center">
            Visiting this site and browsing it is strictly recommended at your own risk. Every information available here is only according to informational purpose and based on astrology and number calculations. We are not associated or affiliated with any illegal Matka business. We make sure we follow all rules and regulations of the regions where you are accessing the website. There are certain laws in some areas and after that if you are using it, you are solely dependable and responsible for any damage, loss or legal action taken. If you are the one who does not like our disclaimer it is advised that you leave our website immediately. Copying of any information/contents posted on the website is strictly prohibited and against the law.
          </div>
        </div>
      </div>

      {/* Powered By */}
      <div className="mx-2 mt-2">
        <div className="bg-pink-500 text-white text-center py-2 rounded font-bold">
          POWERD BY Milaan Matka 777
        </div>
        <div className="bg-orange-200 border-2 border-red-500 rounded-b p-2 text-center text-xs">
          <div>© 2011 - 2025 milaanmatka777.net</div>
          <div>All Rights Reserved</div>
          <div className="mt-1">
            <span className="text-blue-600">Privacy Act</span> |
            <span className="text-blue-600 ml-1">Terms & Conditions</span>
          </div>
        </div>
      </div>

      {/* Popup for Matka Play Download */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-xs w-full text-center shadow-lg">
            <h2 className="text-lg font-bold mb-2 text-blue-700">Download Milaan Matka 777 App</h2>
            <a
              href="https://drive.google.com/file/d/1umNTVp61AXvw1Jl0rP1Pyuo6Sh04MtOY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded font-bold mb-3"
            >
              Download Now
            </a>
            <div>
              <button
                className="mt-2 px-4 py-1 bg-gray-300 rounded text-gray-800 font-semibold"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-2 z-50">
        <div className="flex justify-between items-center">
          <button
            className="bg-blue-700 px-3 py-2 rounded text-sm"
            onClick={() => setShowPopup(true)}
          >
            Matka Play
          </button>
          <button className="bg-blue-700 px-3 py-2 rounded text-sm">Api Offer</button>
          <button
            className="bg-blue-700 px-3 py-2 rounded text-sm"
            onClick={() => window.location.reload()}
          >
            REFRESH
          </button>
        </div>
      </div>

      {/* Bottom spacing for fixed navigation */}
      <div className="h-16"></div>
    </div>
  );
};

export default SattaMatkaWebsite;
