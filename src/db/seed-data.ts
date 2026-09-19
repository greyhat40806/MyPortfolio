export const initialProfile = {
  name: "Ryan Casalme",
  title: "Game Designer & Game Developer",
  subtitle: "Designing gameplay systems, mechanics, and interactive experiences through hands-on game development.",
  bio: "IT student and aspiring Game Designer & Game Developer with hands-on experience developing game prototypes and systems using Godot Engine and Roblox Studio. Specializing in designing engaging gameplay systems, technical documentation, quest/narrative design, and bringing concepts from paper into playable, polished prototypes.",
  strengths: [
    "Gameplay Mechanics Design",
    "Game Systems Architecture",
    "Quest & Narrative Design",
    "Puzzle Design & Logic",
    "Game Controls & Feel",
    "Technical Documentation & GDD",
    "Rapid Prototyping",
    "Scripting (C#, GDScript, Lua)",
    "UI & Game Information Design",
    "Cross-discipline Collaboration"
  ],
  email: "ryancasalme1@gmail.com",
  linkedin: "",
  github: "https://github.com/greyhat40806",
  location: "Philippines",
  resumeUrl: "/docs/Ryan_Casalme_Game_Designer_Resume.pdf"
};

export const initialProjects = [
  {
    slug: "huling-linya",
    title: "Huling Linya",
    subtitle: "A tense DRRM disaster response simulation & narrative thriller set during Typhoon Ramon",
    genre: "Disaster Response Simulation / Narrative Game",
    engine: "Godot Engine 4",
    programming: "C# / .NET",
    status: "Currently In Development",
    isFeatured: true,
    sortOrder: 1,
    coverImage: "/images/huling-linya-hero.jpg",
    shortDescription: "During the peak of Typhoon Ramon, you are the last communications officer inside a failing municipal disaster operations center. Answer emergency calls, dispatch rescue teams, maintain failing equipment, and make impossible moral choices.",
    fullPremise: `During the peak of Typhoon Ramon, you are the last communications officer inside a failing municipal disaster operations center.

Answer emergency calls. Dispatch rescue teams. Maintain the building. Make impossible choices.

When calls arrive from an evacuation center that officially doesn't exist, you must decide whether to follow protocol—or expose the decision that put dozens of lives in danger.

There are no ghosts. No monsters. Only the storm, the system, and your conscience.`,
    roleDescription: `As the Game Designer and Technical Implementer on Huling Linya, Ryan is responsible for:
• Game Design & Mechanics Design: Conceived and designed the core emergency dispatch loop, resource allocation mechanics, and deteriorating building systems.
• Gameplay & Narrative Structure: Formulated the branching decision matrix where protocol adherence clashes with humanitarian ethics.
• Technical Implementation in Godot 4: Scripting core mechanics in C#/.NET, including the state machine for emergency call queues, dispatch timing, and environmental hazard progression.
• Technical Documentation: Authored the full 14-page GDD, flowcharts, input mappings, and dialogue event trees.
• Rapid Prototyping: Built playable vertical slices to test tension curves, call urgency, and UI readability under pressure.`,
    features: [
      "Realistic emergency dispatch simulation based on actual DRRM protocols",
      "Branching narrative with multiple distinct endings based on player morality and speed",
      "Deteriorating environment: failing power generators, water leaks, and degraded radio frequencies",
      "Authentic Filipino setting, municipal office culture, and real-world disaster dynamics",
      "Based on real Philippine DRRM (Disaster Risk Reduction and Management) procedures",
      "30–40 minutes of tense, atmospheric gameplay with meaningful consequence chains",
      "No supernatural horror — pure real-life human terror, institutional pressure, and moral weight"
    ],
    contentWarnings: [
      "Natural disasters (typhoon and catastrophic flooding)",
      "Distressing emergency calls and panic audio",
      "Institutional negligence and protocol corruption",
      "Implied casualties and difficult triage scenarios",
      "Children in danger during severe weather"
    ],
    languages: [
      "Tagalog/Filipino authentic voice & dialogue",
      "English subtitles with accessibility options",
      "English UI with bilingual radio transcripts"
    ],
    mechanics: [
      {
        name: "Emergency Call System",
        tag: "Core Dispatch Loop",
        description: "Incoming calls trigger realistic switchboard rings. Players pick up the handset, listen to voiced callers in Tagalog, and review real-time speech transcripts. The player must extract crucial triage data: coordinates, number of stranded individuals, immediate hazards, and urgency level before line failure.",
        diagramFlow: ["Incoming Call Ring", "Accept Line & Audio Stream", "Extract Triage Intel", "Mark Map Coordinates", "Log Call into Incident Sheet"]
      },
      {
        name: "Resource & Rescue Dispatch",
        tag: "Strategic Allocation",
        description: "Players manage finite municipal rescue assets: Rubber Boats, DRRM Rescue Teams, Medical Units, and Sandbag Logistics. Dispatching a team to one sector leaves other sectors unassisted. Teams require real-time travel minutes to reach destinations.",
        diagramFlow: ["Review Available Assets", "Check Sector Flood Level", "Authorize Dispatch", "Asset En-Route Timer", "Mission Outcome Feedback"]
      },
      {
        name: "Decision-Making & Moral Dilemmas",
        tag: "Systemic Narrative",
        description: "Orders from the Municipal Mayor conflict with desperate radio calls from 'Barangay San Isidro Annex'—an unofficial evacuation site built in a flood-prone quarry. Players must decide whether to send life-saving teams against orders or follow command protocol.",
        diagramFlow: ["Call Received from Unofficial Center", "Consult Mayor Protocol Order", "Choose: Obey Protocol vs Expose/Dispatch", "Log Action to Permanent Dossier"]
      },
      {
        name: "Environmental Deterioration & Building Maintenance",
        tag: "Survival Mechanic",
        description: "The operations center is itself vulnerable. Storm surges flood the basement, threatening the diesel generator. High winds shake the radio mast, inducing audio static. Players must step away from the desk to reset circuit breakers, refuel the generator, and pump bilge water.",
        diagramFlow: ["Monitor Sensor Gauges", "Warning: Generator Sump Level High", "Move to Basement Utility", "Execute Maintenance Interaction", "Restore Operational Power"]
      },
      {
        name: "Branching Narrative & Multiple Endings",
        tag: "Outcome Tracking",
        description: "Every call handled, resource dispatched, and protocol ignored contributes to one of multiple endings. Outcomes range from official whistleblower commendation, tragic loss of life, cover-up complicity, or operational collapse before dawn.",
        diagramFlow: ["Triage Choices Logged", "Whistleblower Evidence Collected", "Dawn Breaks / Storm Subsides", "Final Casualty & Accountability Report", "Tailored Ending Epilogue"]
      }
    ],
    technicalSystems: [
      {
        name: "CallManager & Audio Waveform System",
        category: "C# Script / Godot 4",
        details: "Centralized C# service utilizing Godot 4's AudioStreamPlayer with custom DSP low-pass filter to simulate degraded telephone and VHF radio acoustics. Synchronizes subtitle tokens with audio timestamp callbacks.",
        codeSnippet: `// CallManager.cs - Emergency Call Queue Controller
public partial class CallManager : Node
{
    [Signal] public delegate void CallReceivedEventHandler(EmergencyCall call);
    [Signal] public delegate void LineDegradedEventHandler(float signalStrength);

    private Queue<EmergencyCall> _pendingCalls = new();
    private EmergencyCall _activeCall;

    public void ProcessCallQueue(double delta)
    {
        if (_activeCall != null && _activeCall.IsUrgent)
        {
            _activeCall.TimeRemaining -= (float)delta;
            if (_activeCall.TimeRemaining <= 0)
            {
                TriggerLineLoss(_activeCall);
            }
        }
    }
}`
      },
      {
        name: "BuildingDeteriorationController",
        category: "C# Script / Systems Loop",
        details: "Ticks game state every second, calculating water accumulation in the generator room based on storm intensity. Controls visual screen flicker, ambient audio leaks, and triggers urgent maintenance tasks.",
        codeSnippet: `// BuildingDeteriorationController.cs
public partial class BuildingDeteriorationController : Node
{
    [Export] public float FloodRiseRate = 0.45f; // cm per second
    public float GeneratorWaterLevel { get; private set; } = 0f;
    public bool IsGeneratorRunning { get; private set; } = true;

    public void OnStormSurgeEscalation(int severityLevel)
    {
        FloodRiseRate *= (1.0f + (severityLevel * 0.35f));
        EmitSignal(SignalName.HazardLevelChanged, severityLevel);
    }
}`
      },
      {
        name: "DispatchState & Resource Tracking",
        category: "Data Architecture",
        details: "Maintains real-time status of DRRM assets (Available, En Route, On Scene, Returning, Compromised) with ETA calculation based on river sector flooding depth.",
        codeSnippet: `// RescueUnit.cs
public class RescueUnit
{
    public string UnitId { get; set; }
    public UnitType Type { get; set; } // RubberBoat, MedicTeam, HeavyTruck
    public UnitStatus Status { get; set; }
    public float EtaRemaining { get; set; }
    public string AssignedSector { get; set; }
}`
      }
    ],
    controls: [
      { key: "W / A / S / D", action: "First-Person Movement inside Operations Center", category: "Navigation" },
      { key: "Mouse", action: "Look & Reticle Interaction", category: "Interaction" },
      { key: "E", action: "Interact (Answer Phone, Reset Breaker, Log Sheet)", category: "Interaction" },
      { key: "Tab", action: "Toggle DRRM Protocol Manual & Municipal Sector Map", category: "Interface" },
      { key: "Space", action: "Switch between Call Audio & Dispatch Radio Channel", category: "Audio/Comms" },
      { key: "ESC", action: "Pause Menu & Settings", category: "System" }
    ],
    galleryImages: [
      { url: "/images/huling-linya-hero.jpg", caption: "Municipal Operations Center interior during the height of Typhoon Ramon" },
      { url: "/images/huling-linya-dispatch.jpg", caption: "Dispatch desk with incident log, VHF radio handset, and sector flood map" }
    ],
    demoUrl: "#interactive-demo"
  },
  {
    slug: "cyberxcore",
    title: "CyberXCore",
    subtitle: "2D educational cybersecurity platformer bridging knowledge quizzes with real-time battle mechanics",
    genre: "2D Educational Platformer / Combat Prototype",
    engine: "Godot Engine",
    programming: "GDScript",
    status: "Prototype",
    isFeatured: false,
    sortOrder: 2,
    coverImage: "/images/cyberxcore-banner.jpg",
    shortDescription: "A fast-paced 2D educational cybersecurity game where players navigate cyber-glitch platforming levels and battle malware bosses by applying real-world cybersecurity knowledge under time pressure.",
    fullPremise: `CyberXCore is a 2D educational cybersecurity platformer developed in Godot Engine. Players control a network defense agent traversing infected server environments. When encountering malware manifestations (trojans, phishing traps, DDoS bots), the game pauses real-time movement and presents dynamic cybersecurity scenario questions.

Answering correctly empowers the player's counter-attack payload; failing an answer allows the malware to strike, depleting the firewall shield. The design bridges educational curriculum with snappy arcade game mechanics.`,
    roleDescription: `Ryan designed and implemented:
• Core battle loop and combat state machine in GDScript.
• Quiz mechanics and dynamic question loading from JSON schemas.
• Platformer movement feel: snappy jumps, dash mechanics, and hazard collision.
• UI HUD showing firewall health, combo multiplier, and explanation popups for wrong answers.`,
    features: [
      "Dynamic Question-to-Combat flow (Quiz integration into turn-action combat)",
      "Cybersecurity curriculum: phishing detection, strong password theory, social engineering defense",
      "Responsive 2D platformer movement with custom wall slides and variable jump height",
      "Detailed UI feedback system teaching the rationale behind each cyber security question",
      "Modular enemy encounter triggers allowing rapid level design iterations in Godot"
    ],
    contentWarnings: [],
    languages: ["English"],
    mechanics: [
      {
        name: "Encounter & Battle Transition",
        tag: "Combat State Machine",
        description: "When colliding with malware patrol nodes, the platforming camera locks and initiates the security breach encounter. A cybersecurity puzzle challenge renders on the holographic battle HUD.",
        diagramFlow: ["Patrol Collision", "Freeze Platforming", "Spawn Quiz HUD", "Start Time Penalty Bar"]
      },
      {
        name: "Attack / Counter-Attack Resolution",
        tag: "Turn Mechanic",
        description: "Selecting the correct cybersecurity procedure charges the player's firewall blast, dealing critical damage to the glitch enemy. An incorrect choice triggers an enemy payload attack that damages the player's integrity.",
        diagramFlow: ["Player Submits Answer", "Validate Choice", "Correct -> Player Attacks / Wrong -> Enemy Attacks", "Display Explanatory Feedback", "Check Win/Loss State"]
      },
      {
        name: "Combo Multiplier & Retention",
        tag: "Scoring & Mastery",
        description: "Consecutive correct answers without mistakes activate the 'Root Shield', boosting movement speed and score multipliers across the server grid.",
        diagramFlow: ["Streak Tracker", "Firewall Power Surge", "Reward Extra Life Token"]
      }
    ],
    technicalSystems: [
      {
        name: "QuizCombatController.gd",
        category: "GDScript",
        details: "Decoupled Godot script reading JSON quiz banks, handling timer ticks, randomized question pools, and emitting custom combat signals to player and enemy nodes.",
        codeSnippet: `extends Node2D
signal attack_executed(damage_amount, is_critical)
signal enemy_countered(damage_amount)

var active_question: Dictionary
var time_limit: float = 12.0

func evaluate_answer(selected_index: int) -> void:
    if selected_index == active_question["correct_index"]:
        emit_signal("attack_executed", 25, true)
    else:
        emit_signal("enemy_countered", 15)
        show_explanation(active_question["explanation"])`
      }
    ],
    controls: [
      { key: "A / D / Arrow Keys", action: "Move Left / Right", category: "Movement" },
      { key: "Space", action: "Jump / Double Jump", category: "Movement" },
      { key: "1 / 2 / 3 / 4 or Click", action: "Select Cybersecurity Answer Option", category: "Combat Quiz" },
      { key: "Shift", action: "Dash", category: "Movement" }
    ],
    galleryImages: [
      { url: "/images/cyberxcore-banner.jpg", caption: "CyberXCore quiz encounter HUD with active malware boss battle" }
    ],
    demoUrl: "#cyberxcore-demo"
  },
  {
    slug: "rune-door-puzzle",
    title: "Rune Door Puzzle",
    subtitle: "An atmospheric mathematical puzzle prototype with a three-life system and fail-state tension",
    genre: "Puzzle Prototype / Logic Interaction",
    engine: "Godot Engine",
    programming: "GDScript",
    status: "Prototype",
    isFeatured: false,
    sortOrder: 3,
    coverImage: "/images/rune-door-banner.jpg",
    shortDescription: "A gameplay prototype built in Godot exploring tactile arithmetic rune mechanics, atmospheric dungeon interaction, and a tense three-life system where every calculated choice counts.",
    fullPremise: `Rune Door Puzzle is a focused gameplay prototype developed in Godot Engine to study player puzzle tension, input readability, and tactile feedback.

Players stand before an ancient sealed vault inscribed with glowing arithmetic glyphs. To unlock the door, players must align rotating outer and inner rune rings so that their mathematical values satisfy the central seal equation. The player possesses exactly three glowing life crystals; each incorrect lock attempt shatters a crystal and heightens visual distortion.`,
    roleDescription: `Ryan developed the complete prototype:
• Mathematical formula generation and puzzle balancing curve.
• Interactive 3D/2D rune dial rotation and snap-to-angle mechanics.
• Three-life failure state system with camera shake, audio distortion, and reset states.
• Clear UI feedback communicating rune values and current equation totals.`,
    features: [
      "Satisfying physical rune dial rotation with sound cue feedback",
      "Dynamic math challenge generation (addition, modular arithmetic, balance values)",
      "Three-life tension mechanic: incorrect attempts shatter crystals and increase ambient tension",
      "Immediate visual and audible success/failure states",
      "Full Godot Engine prototype validating interaction feel before production scaling"
    ],
    contentWarnings: [],
    languages: ["English"],
    mechanics: [
      {
        name: "Rune Alignment & Value Summing",
        tag: "Core Puzzle Logic",
        description: "Rotating the outer ring sets the operator; rotating the inner ring sets the operand. The central glyph updates in real-time, allowing players to preview their mathematical total before committing.",
        diagramFlow: ["Select Rune Dial", "Rotate to Target Symbol", "Real-Time Value Preview", "Engage Lock Mechanism"]
      },
      {
        name: "Three-Life Penalty System",
        tag: "Tension Loop",
        description: "Players begin with 3 glowing blue crystals. Submitting an incorrect solution triggers an electric shockwave that breaks 1 crystal and scrambles the rune dial slightly.",
        diagramFlow: ["Submit Equation", "Equation False", "Shatter 1 Crystal", "Apply Screen Shake", "If 0 Crystals: Vault Lockout / Reset"]
      }
    ],
    technicalSystems: [
      {
        name: "RuneDoorState.gd",
        category: "GDScript",
        details: "Finite state machine tracking IDLE, ROTATING, EVALUATING, SUCCESS, and FAILURE states with tweened animations.",
        codeSnippet: `extends Node
enum PuzzleState { IDLE, ROTATING, EVALUATING, SUCCESS, FAILURE }
var current_state: PuzzleState = PuzzleState.IDLE
var lives_remaining: int = 3
var target_sum: int = 42

func verify_solution(val_a: int, val_b: int) -> bool:
    current_state = PuzzleState.EVALUATING
    if (val_a + val_b) == target_sum:
        trigger_door_open()
        return true
    else:
        lives_remaining -= 1
        trigger_failure_feedback()
        return false`
      }
    ],
    controls: [
      { key: "Mouse Drag / Left Click", action: "Rotate Rune Rings", category: "Interaction" },
      { key: "E / Space", action: "Lock In Equation & Submit", category: "Interaction" },
      { key: "R", action: "Reset Ring Alignment", category: "Interaction" }
    ],
    galleryImages: [
      { url: "/images/rune-door-banner.jpg", caption: "Rune Door Puzzle prototype showcasing glowing arithmetic dials and life crystals" }
    ],
    demoUrl: "#rune-door-demo"
  },
  {
    slug: "lambak-ng-diwata",
    title: "Lambak ng Diwata & Lola Inday NPC",
    subtitle: "Filipino folklore environment, quest flow design, and interactive NPC systems in Roblox Studio",
    genre: "Atmospheric Adventure / Quest Prototype",
    engine: "Roblox Studio",
    programming: "Lua / Luau",
    status: "Prototype",
    isFeatured: false,
    sortOrder: 4,
    coverImage: "/images/lambak-diwata.jpg",
    shortDescription: "An atmospheric Philippine folklore environment and quest system created in Roblox Studio, featuring custom terrain, tropical asset layout, and the 'Lola Inday' branching dialogue quest mechanic.",
    fullPremise: `Lambak ng Diwata is a Roblox Studio world-building and quest design prototype inspired by Philippine folklore and rural traditions.

The project features a lush tropical river valley with bespoke terrain sculpted to guide player gaze along natural landmarks. Central to the experience is the 'Lola Inday' NPC—a village elder who provides contextual folklore quests through a custom branching dialogue system coded in Luau. Players learn local herbalist traditions, discover hidden spirit shrines, and navigate natural obstacles.`,
    roleDescription: `Ryan was responsible for:
• Environment Design: Sculpting valley terrain, natural landmarks, lighting atmosphere, and river pathways to guide player orientation without intrusive minimaps.
• Quest & Dialogue System: Writing and structuring the branching dialogue tree for Lola Inday, managing quest stages (Offered, Active, Turn-In, Completed).
• Scripting in Luau: Implementing proximity prompts, camera focus during dialogue, and persistent inventory checks for quest items.
• Cultural Grounding: Integrating respectful Filipino storytelling, respectful depiction of elders, and folklore themes.`,
    features: [
      "Atmospheric tropical valley environment crafted with Roblox smooth terrain and custom flora",
      "Branching NPC dialogue system for 'Lola Inday' with conditional responses",
      "Non-intrusive environmental navigation using waterfalls, torchlines, and river forks",
      "Multi-stage fetch and investigation quest flow with audio-visual completion rewards",
      "Hands-on asset modeling, placement, and lighting optimization in Roblox Studio"
    ],
    contentWarnings: [],
    languages: ["Tagalog / English"],
    mechanics: [
      {
        name: "Lola Inday Dialogue State Tree",
        tag: "NPC & Quest Design",
        description: "Interacting with Lola Inday triggers a cinematic camera zoom. The dialogue tree branches depending on whether the player has accepted the herbal tea quest, collected the required sampaguita blossoms, or asked about village folklore.",
        diagramFlow: ["Approach NPC", "Trigger ProximityPrompt", "Camera Focus on Lola Inday", "Evaluate Quest Flags", "Display Dialogue Branch"]
      },
      {
        name: "Environmental Wayfinding",
        tag: "Level Design",
        description: "Rather than relying on floating UI arrows, the level layout uses winding river banks, floating spirit lights (alitaptap), and distinct canopy openings to lead players toward key quest locations.",
        diagramFlow: ["Visual Landmark (Waterfall)", "Torch Pathway", "Ambient Sound Cue", "Discovery of Spirit Shrine"]
      }
    ],
    technicalSystems: [
      {
        name: "QuestDialogueManager.luau",
        category: "Luau / Roblox Studio",
        details: "Modular quest script listening to client RemoteEvents, checking player backpack items, and persisting quest completion states.",
        codeSnippet: `-- QuestDialogueManager.luau
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local QuestEvent = ReplicatedStorage:WaitForChild("QuestEvent")

local questStates = {
    NOT_STARTED = 0,
    IN_PROGRESS = 1,
    READY_TO_COMPLETE = 2,
    COMPLETED = 3
}

local function onDialogueSelected(player, optionId)
    local state = player:GetAttribute("LolaIndayQuestState") or 0
    if optionId == "accept_tea_quest" and state == questStates.NOT_STARTED then
        player:SetAttribute("LolaIndayQuestState", questStates.IN_PROGRESS)
        QuestEvent:FireClient(player, "QuestUpdated", "Find 3 Wild Sampaguita blossoms along the river.")
    end
end`
      }
    ],
    controls: [
      { key: "W / A / S / D", action: "Character Movement", category: "Movement" },
      { key: "Space", action: "Jump", category: "Movement" },
      { key: "E", action: "Interact with Lola Inday & Collect Flora", category: "Interaction" },
      { key: "Click", action: "Choose Dialogue Option", category: "Interface" }
    ],
    galleryImages: [
      { url: "/images/lambak-diwata.jpg", caption: "Lambak ng Diwata misty valley with Lola Inday's riverside nipa hut" }
    ],
    demoUrl: "#lambak-demo"
  }
];

export const initialSkills = [
  // Game Engine (STRICTLY NO UNITY)
  { category: "Game Engine", name: "Godot Engine 4", level: "Core Focus", description: "Node-based architecture, scene tree optimization, C# & GDScript integration, 2D/3D systems, UI CanvasLayers, and audio buses.", sortOrder: 1 },
  { category: "Game Engine", name: "Roblox Studio", level: "Proficient", description: "Smooth terrain modeling, environment design, ProximityPrompts, client-server RemoteEvents, and Luau quest scripting.", sortOrder: 2 },

  // Programming / Scripting
  { category: "Programming / Scripting", name: "C# / .NET", level: "Core Focus", description: "Primary language for Huling Linya in Godot 4. Strong grasp of object-oriented design, event delegates, asynchronous logic, and state machines.", sortOrder: 1 },
  { category: "Programming / Scripting", name: "GDScript", level: "Proficient", description: "Rapid prototyping, signal-driven node communication, custom resource classes, and physics callbacks in Godot.", sortOrder: 2 },
  { category: "Programming / Scripting", name: "Python", level: "Proficient", description: "Scripting, algorithmic logic, data processing, and rapid automation tools for game design data.", sortOrder: 3 },
  { category: "Programming / Scripting", name: "Java", level: "Hands-on", description: "Object-oriented programming fundamentals, data structures, and algorithmic foundations.", sortOrder: 4 },
  { category: "Programming / Scripting", name: "JavaScript", level: "Proficient", description: "Interactive web logic, state management, asynchronous fetch handling, and web prototype development.", sortOrder: 5 },

  // Web
  { category: "Web", name: "HTML5", level: "Proficient", description: "Semantic markup, web accessibility, and interactive web documentation interfaces.", sortOrder: 1 },
  { category: "Web", name: "CSS3 / Tailwind", level: "Proficient", description: "Modern responsive styling, dark game-dev aesthetics, flexbox/grid layouts, and subtle CSS animations.", sortOrder: 2 },
  { category: "Web", name: "JavaScript / TypeScript", level: "Proficient", description: "Frontend prototyping, data binding, and interactive web tools for game mechanics.", sortOrder: 3 },

  // Game Design
  { category: "Game Design", name: "Gameplay Mechanics", level: "Core Focus", description: "Deconstructing player actions, feedback loops, constraint design, and mechanical feel.", sortOrder: 1 },
  { category: "Game Design", name: "Narrative Design", level: "Core Focus", description: "Branching choice matrices, environmental storytelling, moral tension, and realistic dialogue pacing.", sortOrder: 2 },
  { category: "Game Design", name: "Quest & Mission Design", level: "Proficient", description: "Pacing objectives, failure states, clear player motivation, and contextual NPC interactions.", sortOrder: 3 },
  { category: "Game Design", name: "Puzzle Design", level: "Proficient", description: "Mathematical and mechanical logic puzzles, difficulty curves, and multi-state feedback loops.", sortOrder: 4 },
  { category: "Game Design", name: "Level Design & World Building", level: "Proficient", description: "Visual wayfinding, spatial tension, landmark placement, and player guidance without intrusive UI.", sortOrder: 5 },
  { category: "Game Design", name: "Game Controls & Player Feel", level: "Core Focus", description: "Input responsiveness, rebindable mapping, ergonomics, and seamless UI/gameplay transitions.", sortOrder: 6 },
  { category: "Game Design", name: "Game Design Documentation (GDD)", level: "Core Focus", description: "Clear, structured technical documentation, state charts, mechanic breakdowns, and developer-friendly specs.", sortOrder: 7 },
  { category: "Game Design", name: "Rapid Prototyping", level: "Core Focus", description: "Quickly converting paper concepts into playable vertical slices to test fun factor before asset production.", sortOrder: 8 },
  { category: "Game Design", name: "UI & Game Information Design", level: "Proficient", description: "Tension-communicating diegetic HUDs, switchboards, objective trackers, and clear telemetry.", sortOrder: 9 },
  { category: "Game Design", name: "Gameplay Flow Design", level: "Core Focus", description: "Mapping core loops from trigger -> decision -> consequence -> progression across game sessions.", sortOrder: 10 }
];

export const initialDocuments = [
  {
    title: "Huling Linya — Master Game Design Document (GDD)",
    category: "Game Design Documents",
    projectName: "Huling Linya",
    version: "v1.4",
    pagesCount: 14,
    updatedDate: "Current In-Dev",
    summary: "Complete design specification for Huling Linya covering game premise, DRRM procedures, emergency call loop, dispatch systems, resource decay rates, and branching narrative outcomes.",
    tags: ["GDD", "Godot 4", "Disaster Sim", "Mechanics", "System Design"],
    contentMarkdown: `# HULING LINYA — MASTER GAME DESIGN DOCUMENT
**Author:** Ryan Casalme (Game Designer & Developer)  
**Engine:** Godot Engine 4 (C# / .NET)  
**Status:** In Active Development  
**Genre:** Disaster Response Simulation / Narrative Game

---

### 1. HIGH CONCEPT & PREMISE
During the peak of Typhoon Ramon, the player takes the role of the final communications officer inside a deteriorating municipal disaster operations center in the Philippines. As telephone lines crackle and river waters breach municipal barriers, the player must triage real-time distress calls, dispatch scarce rescue teams, repair failing generators, and confront a mounting ethical crisis: an unregistered evacuation center harboring 80 citizens that municipal protocol explicitly disowns.

### 2. CORE GAMEPLAY LOOP
\`\`\`
Emergency Call Received (VHF / Landline)
      │
      ▼
Assess Caller Situation & Triage Urgency (Tagalog dialogue + audio clues)
      │
      ▼
Make Operational Decision (Dispatch team vs. Hold for higher priority)
      │
      ▼
Execute Action & Log Event (Municipal map pin + resource decrement)
      │
      ▼
Manage Operations Center Hazards (Generator fuel, water pumps, radio static)
      │
      ▼
Receive Immediate / Delayed Consequences (Casualty count, survivor updates)
      │
      ▼
Branching Moral & Ending Progression (Protocol Adherence vs. Humanitarian Whistleblower)
\`\`\`

### 3. MECHANIC SPECIFICATIONS
- **Call Triage System:** Calls have varying degradation timers. If a line drops before the player extracts key info (coordinates, head count, water height), the sector is marked 'Unverified'.
- **Resource Constraints:**
  - 3 Rubber Rescue Boats (vulnerable to severe debris)
  - 2 Medical Response Units (needed for injuries)
  - 1 Heavy 6x6 Military Truck (can traverse deep water, high fuel burn)
- **Building Deterioration:** The operations center is not safe. Water accumulates in the generator room at 0.45 cm/sec during storm surges. Failure to pump water disables radar and radio comms.

### 4. NARRATIVE DESIGN & MORAL WEIGHT
The core narrative tension avoids supernatural tropes:
- **Protocol Route:** Obey municipal director orders. Focus exclusively on gazetted relief zones. Minimize municipal liability; consequence: heavy unrecorded casualties in informal settlements.
- **Whistleblower Route:** Divert resources to unlisted quarry evacuation center. Save vulnerable families; consequence: official reprimand, loss of communications license, and exposure of municipal zoning corruption.`
  },
  {
    title: "CyberXCore — Educational Mechanics & Combat Flow Spec",
    category: "Game Design Documents",
    projectName: "CyberXCore",
    version: "v1.1",
    pagesCount: 8,
    updatedDate: "Prototype Complete",
    summary: "System design detailing the integration of cybersecurity trivia challenges into 2D platformer combat, question tier balancing, and player reward pacing.",
    tags: ["GDD", "Godot", "Combat Loop", "Educational", "Mechanics"],
    contentMarkdown: `# CYBERXCORE — MECHANICS SPECIFICATION
**Designer:** Ryan Casalme  
**Engine:** Godot Engine (GDScript)  
**Target:** 2D Educational Platformer

---

### 1. DESIGN GOAL
Transform passive cybersecurity multiple-choice tests into active, high-stakes game combat actions where knowledge directly empowers player offensive and defensive output.

### 2. COMBAT FLOW
\`\`\`
Player Encounters Malware Boss / Node
      │
      ▼
Holographic Security Challenge Spawns (12-second countdown)
      │
      ├───────────────────────────────┐
      ▼                               ▼
[Correct Answer]             [Incorrect Answer / Timeout]
      │                               │
Firewall Core Overcharge        Malware Payload Executes
Player Deals 25-40 Damage       Player Takes 15 Shield Damage
Streak Multiplier +1            Educational Retrospective Popup
      │                               │
      └──────────────┬────────────────┘
                     ▼
      Check Entity Health <= 0
                     │
           Resume Platforming Level
\`\`\`

### 3. BALANCING MATRIX
- **Tier 1 (Phishing & Social Engineering):** High frequency, low damage penalty. Encourages quick pattern recognition of fake URLs and sender headers.
- **Tier 2 (Password Entropy & 2FA):** Medium frequency, puzzles require calculating brute-force resistance.
- **Tier 3 (SQL Injection & Network Ports):** Boss phase challenges with time penalty modifiers.`
  },
  {
    title: "Huling Linya — Technical Architecture & Godot 4 Scene Tree",
    category: "Technical Documentation",
    projectName: "Huling Linya",
    version: "v1.2",
    pagesCount: 6,
    updatedDate: "In Progress",
    summary: "Technical breakdown of Godot 4 C# architecture, scene composition, CallManager event bus, and audio DSP pipeline.",
    tags: ["Technical", "C# / .NET", "Godot 4", "Scene Tree", "EventBus"],
    contentMarkdown: `# HULING LINYA — TECHNICAL SYSTEM ARCHITECTURE
**Lead Technical Implementer:** Ryan Casalme  
**Framework:** Godot Engine 4.x (.NET 8 / C#)

---

### 1. SCENE COMPOSITION
\`\`\`
MainOperationsRoom (Node3D)
├── WorldEnvironment (Atmospheric volumetric fog & rain particle emitters)
├── OperationsDesk (Node3D)
│   ├── TelephoneStation (StaticBody3D + Area3D raycast trigger)
│   ├── DispatchRadioConsole (Node3D with dial interactables)
│   ├── MunicipalIncidentMap (SubViewport for dynamic map pins)
│   └── IncidentLogClipboard (2D UI Overlay render target)
├── BasementUtilitySector (Node3D)
│   ├── DieselGenerator (Node3D + ParticleEmitter for smoke/sparks)
│   └── BilgePumpSwitchboard (Interactable button matrix)
└── Controllers (Node)
    ├── CallManager (C# Node)
    ├── DispatchSystem (C# Node)
    ├── BuildingDeteriorationController (C# Node)
    └── NarrativeStateManager (C# Node)
\`\`\`

### 2. EVENT-DRIVEN C# PIPELINE
All communication between 3D world interactions and 2D UI terminals flows through a strongly typed C# EventBus:
- \`EventBus.OnCallAnswered(EmergencyCall call)\`
- \`EventBus.OnDispatchConfirmed(string sectorId, RescueUnit unit)\`
- \`EventBus.OnGeneratorHealthUpdated(float currentHealthPercent)\`
- \`EventBus.OnMoralDilemmaResolved(DilemmaChoice choice)\``
  },
  {
    title: "Rune Door Puzzle — Mathematical Logic & State Machine",
    category: "Technical Documentation",
    projectName: "Rune Door Puzzle",
    version: "v1.0",
    pagesCount: 5,
    updatedDate: "Prototype Complete",
    summary: "Complete mathematical formula matrix, three-life penalty state machine, and audio-visual feedback specifications in Godot.",
    tags: ["Technical", "GDScript", "Puzzle Logic", "State Machine"],
    contentMarkdown: `# RUNE DOOR PUZZLE — TECHNICAL & MATHEMATICAL SPEC
**Author:** Ryan Casalme  
**Engine:** Godot Engine (GDScript)

---

### 1. PUZZLE ALGORITHM
The rune vault door requires three concentric rings (A, B, Operator) to equal the central keystone value:
$$\\text{Result} = (\\text{Ring}_A \\circ \\text{Ring}_B) \\pmod N$$

### 2. THREE-LIFE STATE MACHINE
\`\`\`
[STATE: IDLE]
      │ (Player clicks & rotates ring)
      ▼
[STATE: ROTATING]
      │ (Player hits Engage / Space)
      ▼
[STATE: VERIFYING]
      ├── If Match: [STATE: DOOR_OPENING] -> Play stone scrape SFX -> Win
      └── If Mismatch: [STATE: PENALTY]
               │
               Lives Remaining = Lives - 1
               Shatter 1 Blue Crystal mesh
               Screen shake intensity: 0.8
               │
               ├── If Lives > 0: Return to [STATE: IDLE]
               └── If Lives == 0: [STATE: VAULT_LOCKDOWN] -> Alarm & Reset
\`\`\``
  },
  {
    title: "Huling Linya — Narrative Branching Tree & Ending Epilogues",
    category: "Narrative Design",
    projectName: "Huling Linya",
    version: "v1.3",
    pagesCount: 11,
    updatedDate: "Current In-Dev",
    summary: "Dialogue flow, radio script cues, Tagalog voice acting guidelines, and the full multi-branch decision matrix leading to 4 distinct endings.",
    tags: ["Narrative", "Branching Story", "Dialogue", "Filipino DRRM"],
    contentMarkdown: `# HULING LINYA — NARRATIVE BRANCHING SPECIFICATION
**Writer & Narrative Designer:** Ryan Casalme  
**Tone:** Somber, grounded, high-tension, morally fraught

---

### 1. THE CENTRAL ETHICAL CONFLICT
At 02:40 AM, caller 'Sister Teresa' calls from **Barangay San Isidro Annex**—a repurposed concrete granary holding 80 evacuees. The municipal master list provided by the Mayor does not list San Isidro Annex because building permits were illegally granted in a flood basin.

**Official Directive:**
> *"Do not redirect DRRM Team Alpha to unlisted coordinates. Prioritize high-value commercial and municipal storage sectors."*

### 2. BRANCHING CONSEQUENCE MATRIX
\`\`\`
                       [SAN ISIDRO CALL RECEIVED]
                                   │
              ┌────────────────────┴────────────────────┐
              ▼                                         ▼
   [OBEY PROTOCOL DIRECTIVE]                  [DISPATCH RESCUE TEAM]
              │                                         │
Resource preserved for Town Hall            DRRM Team Alpha arrives at quarry
Water reaches 2.4m at Annex                 58 citizens rescued before wall collapse
Phone line from Teresa goes silent          Municipal Director threatens insubordination
              │                                         │
              ├───────────┐                             ├───────────┐
              ▼           ▼                             ▼           ▼
       [STORM PASSES] [COVER UP]                 [EXPOSE FILES] [SILENCED]
\`\`\`

### 3. THE FOUR ENDINGS
1. **Ending A — Ang Saksi (The Whistleblower):** Player archives all dispatch logs, leaks the unlisted evacuation center audio, and saves lives at the cost of immediate suspension.
2. **Ending B — Ayon sa Protocol (By The Book):** 100% protocol adherence. Director commends your discipline; morning casualty report lists catastrophic avoidable loss.
3. **Ending C — Pagguho (Operational Collapse):** The operations center flooded due to neglect of the basement pumps; communications died at peak storm.
4. **Ending D — Ang Huling Linya (The Final Line):** The communications officer stays on line with trapped callers until the last battery dies.`
  }
];

export const initialGameJams = [
  {
    eventName: "YGG Hackathon / Game Jam",
    projectTitle: "Rapid Gameplay & Systems Prototype",
    role: "Game Designer & Systems Prototyper",
    status: "Prototype",
    timeline: "Game Jam Sprint (48 Hours)",
    overview: "Participated in the intense YGG Game Jam / Hackathon, collaborating in a high-speed development environment to ideate, design, and prototype an interactive game system within 48 hours.",
    contributions: [
      "Deconstructed the jam theme into core playable mechanics within the first 3 hours.",
      "Designed the primary gameplay loop, balancing risk-reward mechanics and immediate feedback.",
      "Mapped and scripted game state transitions, player inputs, and win/loss conditions.",
      "Created structured documentation and wireframe flowcharts to keep team members aligned.",
      "Conducted rapid playtesting sessions during hour 36 to tune player pacing, difficulty curve, and readability."
    ],
    gameplayConcept: "A high-tension time-attack survival system where players balance limited resources while navigating escalating environmental hazards.",
    mechanics: [
      "Dynamic resource depletion loop",
      "Risk-reward hazard traversal",
      "Snappy state-driven player feedback",
      "Immediate restart loop for iterative mastery"
    ],
    process: "Idea Brainstorming (Hours 0-4) → Mechanics Specification & Paper Prototyping (Hours 4-8) → Godot Implementation & Core Loop Integration (Hours 8-28) → Systems Balancing & Playtest Iterations (Hours 28-40) → Audio-visual Polish & Jam Submission (Hours 40-48).",
    takeaways: "Demonstrated the vital ability to rapidly convert high-level game concepts into functional, playable systems under strict deadlines without scope bloat, communicating clearly across disciplines.",
    technologies: ["Godot Engine", "GDScript", "System Flowcharts", "Rapid Playtesting"],
    image: "/images/game-design-schematic.jpg"
  }
];
