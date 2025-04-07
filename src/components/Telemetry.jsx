import React from "react";
import { useState } from "react";

const Telemetry = () => {

  const [teamIdData, setTeamIdData] = useState(null);
  const [cmoEcho, setCmoEcho] = useState(null);
  const [positionX, setPositionX] = useState(32.32);
  const [positionY, setPositionY] = useState(36.123);
  const [positionZ, setPositionZ] = useState(76.23);
  const [velocityHorizontal, setVelocityHorizontal] = useState(0.12);
  const [velocityVertical, setVelocityVertical] = useState(0.05);
  const [homePositionX, setHomePositionX] = useState(32.32);
  const [homePositionY, setHomePositionY] = useState(36.123);
  const [battery, setBattery] = useState("100%");
  const [gps, setGps] = useState("30");
  const [flightMode, setFlightMode] = useState("Stabilize");
  const [mode, setMode] = useState("ALT_MODE");
  const [status, setStatus] = useState("Connected");
  const [accelerationRoll, setAccelerationRoll] = useState(0.12);
  const [accelerationPitch, setAccelerationPitch] = useState(0.05);
  const [accelerationYaw, setAccelerationYaw] = useState(0.08);
  const [MagRoll, setMagRoll] = useState(0.98);
  const [MagPitch, setMagPitch] = useState(0.02);
  const [MagYaw, setMagYaw] = useState(0.01);
  const [consoleGreenData, setConsoleGreenData] = useState("[INFO] Connected to Drone @ 192.168.1.50 [INFO] Wi-Fi Signal: -62 dBm")
  const [consoleBlueData, setConsoleBlueData] = useState("[MODE] Switched to MANUAL mode [COMMAND] AUTO_START sent [MODE] Switched to AUTONOMOUS mode");

  return (
    <div className="min-h-screen w-full overflow-hidden flex items-center justify-center gap-[30px] bg-[#222731]">
      <div className="h-[725px] w-[48%] flex items-center justify-center gap-[10px] flex-col">
        <div className="h-[320px] w-full flex items-start justify-start px-[30px] flex-col">
          <h1 className="font-iceland text-[35px] text-white font-bold">
            Telemetry
          </h1>
          <div className="h-[300px] w-[90%] bg-[#353537] rounded-[20px] flex items-start justify-start p-[20px] flex-col">
            <h1 className="text-[30px] text-white font-iceland">
              Position:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Z
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;({positionX})&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;({positionY})&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;({positionZ})
            </h1>
            <h1 className="text-[30px] text-white font-iceland">
              Velocity:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Horizontal:&nbsp;&nbsp;&nbsp;
              [{velocityHorizontal}]
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vertical:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              [{velocityVertical}]
            </h1>
            <h1 className="text-[30px] text-white font-iceland">
              Home Position:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X:({homePositionX})&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y:({homePositionY})
            </h1>
          </div>
        </div>
        <div className="h-[280px] w-full flex items-start justify-start px-[30px] flex-col">
          <h1 className="font-iceland text-[35px] text-white font-bold">
            Drone Status
          </h1>
          <div className="h-[300px] w-[90%] rounded-[20px] flex items-start justify-start gap-[10px] p-[10px]">
            <div className="h-[99%] w-[55%] bg-[#353537] rounded-[20px] flex items-start justify-center gap-[20px] px-[20px] flex-col">
              <h1 className="text-[30px] text-white font-iceland">
                Battery:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-500">{battery}</span>
              </h1>
              <h1 className="text-[30px] text-white font-iceland">
                GPS:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-500">{gps}</span>
              </h1>
              <h1 className="text-[30px] text-white font-iceland">
                Flight Mode: &nbsp;&nbsp;<span className="text-green-500">{flightMode}</span>
              </h1>
            </div>
            <div className="h-[99%] w-[40%] bg-[#353537] rounded-[20px] flex items-start justify-center gap-[10px] px-[20px] py-[10px] flex-col">
              <button className="h-[60px] text-[30px] font-iceland font-bold w-[98%] bg-[#B2FF00] hover:scale-[105%] transition-all duration-100 rounded-[10px] flex items-center justify-center">
                RT HOME
              </button>
              <button className="h-[60px] w-[98%] bg-[#B2FF00] hover:scale-[105%] transition-all duration-100 text-[30px] font-iceland font-bold rounded-[10px] flex items-center justify-center">
                ARM
              </button>
              <button className="h-[60px] w-[98%] bg-[#B2FF00] hover:scale-[105%] transition-all duration-100 text-[30px] font-iceland font-bold rounded-[10px] flex items-center justify-center">
                DISARM
              </button>
            </div>
          </div>
        </div>
        <div className="h-[80px] w-[90%] rounded-[15px] bg-[#353537] flex items-center justify-center gap-[120px]">
          <h1 className="text-[30px] font-bold font-iceland text-white">MODE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">{mode}</span></h1>
          <h1 className="text-[30px] font-bold font-iceland text-white">STATUS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-500">{status}</span></h1>
        </div>
      </div>
      <div className="h-[725px] w-[48%] flex items-start justify-start px-[20px] pt-[20px] gap-[5px] flex-col">
        <h1 className="text-[35px] font-iceland font-bold text-white">Mission Time - 00:00:00</h1>
        <div className="h-[300px] w-full flex items-center justify-center gap-[15px]">
          <div className="h-[80%] w-[50%]  flex items-start px-[10px] justify-between gap-[10px] flex-col">
            <h1 className="text-[30px] font-bold font-iceland text-white">IMLI</h1>
            <div className="h-[95%] w-[95%] bg-[#353537] rounded-[20px] flex items-center justify-center flex-col gap-[10px]">
                <h1 className="text-[28px] text-white font-iceland"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Roll&nbsp;&nbsp;&nbsp;&nbsp;Pitch&nbsp;&nbsp;&nbsp;&nbsp;Yaw </h1>
                <h1 className="text-[28px] text-white font-iceland"> Accel  &nbsp;&nbsp;&nbsp;&nbsp;{accelerationRoll}&nbsp;&nbsp;&nbsp;&nbsp;{accelerationPitch}&nbsp;&nbsp;&nbsp;&nbsp;{accelerationYaw} </h1>
                <h1 className="text-[28px] text-white font-iceland"> Mag  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{MagRoll}&nbsp;&nbsp;&nbsp;&nbsp;{MagPitch}&nbsp;&nbsp;&nbsp;&nbsp;{MagYaw} </h1>
                
            </div> 
          </div>
          <div className="h-[80%] w-[45%] flex items-start px-[10px] justify-between gap-[10px] flex-col">
            <h1 className="text-[30px] font-bold font-iceland text-white">Command Pannel</h1>
            <div className="h-[95%] w-[95%] bg-[#353537] rounded-[20px] flex items-center justify-center flex-col gap-[10px]">
                <button className="h-[50px] w-[90%] rounded-[10px] hover:scale-[105%] transition-all duration-100 text-[30px] font-iceland font-bold bg-green-400">Manual</button>
                <button className="h-[50px] w-[90%] rounded-[10px] hover:scale-[105%] transition-all duration-100 text-[30px] font-iceland font-bold bg-green-400">Autonomous</button>
            </div> 
          </div>
        </div>
        <div className="h-[350px] w-full flex items-start justify-start flex-col pl-[25px]">
          <h1 className="text-[30px] font-iceland font-bold px-[15px] text-white">Console Output</h1>
          <div className="h-[82%] w-[96%] bg-black text-white pt-[10px] rounded-[10px] px-[10px] flex items-start justify-start flex-col gap-[10px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <p style={{whiteSpace: "pre-line"}} className="text-[22px] w-[438px] font-iceland text-green-500">
            {consoleGreenData}
              {/* CMD, {teamIdData || 3107}, {cmoEcho || ""} */}
            </p>
            <br/>
            <p className="font-iceland break-all w-[320px] text-[20px] text-blue-400 tracking-wider">
              {/* 3103, 00:00:06, 123, FLIGHT, DESCENT, 850.5, 22.3, 95.7, 4.8,
              0.12, 0.05, 0.08, 0.98, 0.02, 0.01, 0.15, 0.10, 0.12, 0.05,
              12:34:55, 850.2, 37.7749, -122.4194, 8, RESET_CMD */}
              {consoleBlueData}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telemetry;
