# Design QA

final result: passed

Reference states checked:
- General instructions screen: matched header, content scroll area, right candidate panel, legend symbols, and fixed footer controls.
- Test declaration screen: matched title placement, duration/marks row, declaration block, language selector, and bottom navigation.
- Active exam screen: matched timer header, section tab, question toolbar, answer options, right question palette, status counters, and fixed exam controls.

Functional checks:
- Launch button requests fullscreen and enters the CBT flow.
- General instructions advance to the declaration screen.
- Begin button requires language selection and declaration checkbox.
- Timer starts at 8 minutes on exam start.
- Question palette, Save & Next, Mark for Review & Next, Clear Response, Question Paper, Instructions, Pause, panel toggle, and Submit Test are wired.
- Initial active question state matches the reference: current question is highlighted while all questions remain counted as not visited until user action.

Known intentional differences:
- Testbook branding and logo are not copied. The header uses plain NPrep text branding only.
- Candidate avatar is a generic generated-style visual, not the copied reference photo.
