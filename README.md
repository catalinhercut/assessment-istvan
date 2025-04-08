## 🚩 **Frontend Assignment: Feature Flags Implementation Using a Figma Dashboard**

### 🎯 **Assignment Goal**

Using the provided **free Figma dashboard template**, your goal is to create a simple yet effective **client-side feature flag system**. You'll implement these flags to control the visibility of selected UI components from the provided dashboard mockup.

This assignment tests your skills in **frontend architecture**, **conditional rendering** and **decision-making** under limited time.

---

### 📥 **Resources Provided**

✅ **Dashboard Mockup (Figma):**  
👉 [Free Dashboard UI (Figma Community)](https://www.figma.com/community/file/1020707462188017225)

✅ **Feature Flags to Implement**:
- `showTotalRevenueCard` – Toggles visibility of the "Total Revenue" card.
- `showActiveUsersWidget` – Toggles the "Active Users" analytics widget.
- `enableDarkMode` – Toggles between dark and light themes.
- `showSidebarMessages` – Toggles the messages section in the sidebar.

---

### 📌 **Task Breakdown (~2 hours)**

#### **1. Implement Your Feature Flag Logic (~40 min)**
- Define flags as a JS object or local JSON file.
- Provide a simple React hook or utility (e.g., `useFeatureFlag("enableDarkMode")`).
- Enable URL-based overrides for testing (`?enableDarkMode=true`).

#### **2. Simplified Dashboard UI Implementation (~80 min)**
- Build a minimal React layout based on the provided Figma mockup.
- Clearly demonstrate conditional rendering via your feature flags.
- Prioritize clear structure and readability over pixel-perfect styling.

**Suggested Layout Structure**:
- **Header**
- **Sidebar**:
  - Messages *(conditionally rendered via `showSidebarMessages`)*
- **Main Dashboard Area**:
  - Total Revenue Card *(conditionally rendered via `showTotalRevenueCard`)*
  - Active Users Widget *(conditionally rendered via `showActiveUsersWidget`)*

#### **3. Decision Journal (~10 min)**
Briefly answer in your `README.md`:
- Key assumptions you made.
- Architectural decisions & reasoning behind them.
- Trade-offs made due to time constraints.
- Suggested improvements if deploying to production.

---

### 🧪 **Bonus (optional if time allows)**
- Persist flag states using `localStorage`.
- Add a simple unit test for the feature flag logic (Jest or React Testing Library).

---

### ✅ **Evaluation Criteria**

| Criteria              | Evaluation Focus                                       |
|-----------------------|--------------------------------------------------------|
| **Feature Flag Logic**| Clear, reusable, and logical implementation            |
| **Conditional UI**    | Intuitive and logical conditional rendering            |
| **Decision Clarity**  | Clear reasoning and documented trade-offs              |
| **UX Integration**    | Thoughtful use of feature flags within the UI          |

---

### ⏳ **Time Limit**
**~2 hours maximum.** Aim for clarity and thoughtful decision-making.
