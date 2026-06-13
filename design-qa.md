# Design QA

final result: passed

Reference states checked:
- General instructions screen: removed the close/X control and reduced the instruction text size.
- Active NORCET-style exam screen: matched the dark blue title bar, candidate strip, section tabs, marks row, right question palette, diamond current/not-answered marker, grey unvisited buttons, submit button, and bottom navigation controls from the supplied reference screenshots.

Functional checks:
- First user click inside the CBT interface requests fullscreen.
- General instructions advance to the declaration screen.
- Begin button requires language selection and declaration checkbox.
- Timer starts at 90 minutes on exam start.
- Question palette, Previous, Save & Next, Mark for Review & Next, Clear Response, and Submit Exam are wired.
- Initial active question state matches the NORCET reference: question 1 is a red diamond and the remaining questions are grey unvisited boxes.

Known intentional differences:
- The photo area uses a neutral "Photo" placeholder rather than a real candidate photograph.
