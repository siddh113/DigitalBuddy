export const getLessonContent = (courseId: string, moduleTitle: string, lesson: string): string => {
  return lessonData[courseId]?.[moduleTitle]?.[lesson] || "Content for this lesson is being developed.";
};

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export const getQuizQuestions = (courseId: string, moduleTitle: string, quizNumber: number): QuizQuestion[] => {
  const quizName = `Quiz ${quizNumber}`;
  return quizData[courseId]?.[moduleTitle]?.[quizName] || [];
};

// Simple placeholder content
const lessonData: Record<string, Record<string, Record<string, string>>> = {
  microsoft: {
    "Microsoft Word Basics": {
     "Introduction to Word Interface": `
        <h2><strong>Introduction to Microsoft Word Interface</strong></h2>
        <p>Welcome to the Microsoft Word interface! In this lesson, you'll learn about the key components of the Word interface.</p>
        <p></p>
        <h3><strong>The Ribbon</strong></h3>
        <p>--> The Ribbon is the main control panel at the top of the Word window. It's organized into tabs (Home, Insert, Design, etc.) 
        with related commands grouped together.</p>
        
        <h3><strong>Quick Access Toolbar</strong></h3>
        <p>--> Located above the Ribbon, this customizable toolbar provides one-click access to commonly used commands like Save, 
        Undo, and Redo.</p>
        
        <h3><strong>Document Area</strong></h3>
        <p>--> This is where you type and edit your text. The white space represents your document as it will appear when printed.</p>
        
        <h3><strong>Status Bar</strong></h3>
        <p>--> Located at the bottom of the window, it displays information about your document, such as page count, word count, 
        and view options.</p>
        
        <h3><strong>Navigation Pane</strong></h3>
        <p>--> This optional panel helps you navigate through your document using headings, pages, or search results.</p>
        
        <h3><strong>Practice Exercise</strong></h3>
        <p>--> Open Microsoft Word and identify each of these interface elements. Try clicking on different tabs in the Ribbon 
        to see what commands are available.</p>
      `,
      "Basic Text Formatting": `
        <h2>Basic Text Formatting in Word</h2>
        <p>Learn how to make your text look professional and readable with these essential formatting techniques.</p>
        
        <h3>Font Formatting</h3>
        <ul>
          <li><strong>Font Type:</strong> Change the appearance of text by selecting different fonts</li>
          <li><strong>Font Size:</strong> Make text larger or smaller</li>
          <li><strong>Bold, Italic, Underline:</strong> Emphasize important information</li>
          <li><strong>Text Color:</strong> Add color to your text</li>
          <li><strong>Highlighting:</strong> Mark important sections with color highlighting</li>
        </ul>
        
        <h3>Paragraph Formatting</h3>
        <ul>
          <li><strong>Alignment:</strong> Left, Center, Right, or Justified</li>
          <li><strong>Line Spacing:</strong> Control the space between lines of text</li>
          <li><strong>Paragraph Spacing:</strong> Add space before or after paragraphs</li>
          <li><strong>Bullets and Numbering:</strong> Create organized lists</li>
          <li><strong>Indentation:</strong> Control the position of text from margins</li>
        </ul>
        
        <h3>Text Styles</h3>
        <p>Styles are predefined formatting settings that can be applied to text with a single click. 
        They help maintain consistency throughout your document and save time.</p>
        
        <h3>Format Painter</h3>
        <p>The Format Painter tool lets you copy formatting from one piece of text and apply it to another,
        which is extremely useful for maintaining consistent formatting.</p>
        
        <h3>Practice Exercise</h3>
        <p>Create a new document and practice applying different text formatting options. 
        Try creating a heading with a larger font size, bold formatting, and a different color. 
        Then create a bulleted list with items that are indented.</p>
      `,
      "Working with Documents": `
        <h2>Working with Documents in Word</h2>
        <p>Learn how to create, save, open, and manage your Word documents efficiently.</p>
        
        <h3>Creating New Documents</h3>
        <p>You can create a new blank document or use templates to get started quickly. Templates provide 
        pre-designed layouts for specific document types like resumes, letters, or reports.</p>
        
        <h3>Saving Documents</h3>
        <ul>
          <li><strong>Save:</strong> Store your document for the first time or update an existing file</li>
          <li><strong>Save As:</strong> Create a copy of your document with a new name or in a different format</li>
          <li><strong>AutoSave:</strong> Automatic saving for documents stored in OneDrive or SharePoint</li>
        </ul>
        
        <h3>File Formats</h3>
        <ul>
          <li><strong>.docx:</strong> The standard Word document format</li>
          <li><strong>.pdf:</strong> Create non-editable documents that maintain formatting</li>
          <li><strong>Other formats:</strong> .txt, .rtf, .html, etc.</li>
        </ul>
        
        <h3>Document Properties</h3>
        <p>Document properties store information about your file, such as author, title, and keywords.
        This metadata helps with organization and searchability.</p>
        
        <h3>Document Protection</h3>
        <p>You can protect your documents with passwords to prevent unauthorized access or restrict 
        editing to certain sections.</p>
        
        <h3>Practice Exercise</h3>
        <p>Create a new document, add some text, and save it in different formats (.docx and .pdf). 
        Try opening the file in different applications to see how it appears.</p>
      `,
      "Quiz 1": "You'll be tested on the Word interface, basic text formatting, and document management.",
      "Inserting Images and Tables": `
        <h2>Inserting Images and Tables in Word</h2>
        <p>Learn how to enhance your documents with visual elements like images and well-organized data in tables.</p>
        
        <h3>Working with Images</h3>
        <ul>
          <li><strong>Inserting Images:</strong> Add pictures from your computer or online sources</li>
          <li><strong>Image Formatting:</strong> Resize, crop, rotate, and adjust brightness/contrast</li>
          <li><strong>Text Wrapping:</strong> Control how text flows around images</li>
          <li><strong>Picture Styles:</strong> Apply borders, shadows, and effects</li>
          <li><strong>Alt Text:</strong> Add descriptions for accessibility</li>
        </ul>
        
        <h3>Creating and Formatting Tables</h3>
        <ul>
          <li><strong>Insert Table:</strong> Create tables with specific rows and columns</li>
          <li><strong>Table Styles:</strong> Apply predefined formats to tables</li>
          <li><strong>Cell Formatting:</strong> Adjust borders, shading, and text alignment</li>
          <li><strong>Merging and Splitting Cells:</strong> Customize your table structure</li>
          <li><strong>Table Properties:</strong> Control table size, alignment, and text wrapping</li>
        </ul>
        
        <h3>Using SmartArt and Charts</h3>
        <p>Word includes tools for creating diagrams, organizational charts, and data visualizations
        to represent complex information clearly.</p>
        
        <h3>Practice Exercise</h3>
        <p>Create a document that includes an image with text wrapping and a simple table with formatted headers.
        Try applying different styles to both elements.</p>
      `,
      "Page Layout and Margins": `
        <h2>Page Layout and Margins in Word</h2>
        <p>Learn how to control the overall appearance of your document pages.</p>
        
        <h3>Page Setup</h3>
        <ul>
          <li><strong>Margins:</strong> Control the space between your text and the edge of the page</li>
          <li><strong>Orientation:</strong> Choose between portrait (vertical) and landscape (horizontal)</li>
          <li><strong>Paper Size:</strong> Select standard sizes like Letter, A4, or custom dimensions</li>
        </ul>
        
        <h3>Page Breaks</h3>
        <ul>
          <li><strong>Manual Page Breaks:</strong> Force content to start on a new page</li>
          <li><strong>Section Breaks:</strong> Divide your document into sections with different formatting</li>
        </ul>
        
        <h3>Columns</h3>
        <p>Arrange text in multiple columns, like in newspapers or magazines, to improve readability
        for certain types of documents.</p>
        
        <h3>Headers and Footers</h3>
        <p>Add text, page numbers, dates, or other information that appears at the top or bottom
        of every page in your document.</p>
        
        <h3>Page Borders and Watermarks</h3>
        <p>Add decorative borders around your pages or watermarks (like "Draft" or "Confidential")
        that appear behind your text.</p>
        
        <h3>Practice Exercise</h3>
        <p>Create a document with different margin settings, add a header with your name and a footer with page numbers.
        Try changing the orientation for part of your document using section breaks.</p>
      `,
      "Working with Templates": `
        <h2>Working with Templates in Word</h2>
        <p>Save time and ensure consistency by using and creating templates.</p>
        
        <h3>Using Existing Templates</h3>
        <ul>
          <li><strong>Built-in Templates:</strong> Word comes with many ready-to-use templates</li>
          <li><strong>Online Templates:</strong> Access thousands of free templates from Microsoft Office</li>
          <li><strong>Customizing Templates:</strong> Modify existing templates to suit your needs</li>
        </ul>
        
        <h3>Creating Your Own Templates</h3>
        <ul>
          <li><strong>Save as Template:</strong> Convert a document to a template (.dotx format)</li>
          <li><strong>Template Elements:</strong> Include styles, formatting, boilerplate text, etc.</li>
          <li><strong>Template Organization:</strong> Store templates in the proper location for easy access</li>
        </ul>
        
        <h3>Template Best Practices</h3>
        <p>Learn when to use templates, how to maintain them, and strategies for organization-wide template management.</p>
        
        <h3>Building Blocks and Quick Parts</h3>
        <p>Save and reuse content elements like headers, text blocks, or tables across multiple documents.</p>
        
        <h3>Practice Exercise</h3>
        <p>Download a resume template, customize it with your information, and then create your own template
        for a letter or report that you frequently need to create.</p>
      `,
      "Quiz 2": "You'll be tested on inserting and formatting images and tables, page layout, and working with templates."
    },
    "Excel Fundamentals": {
      "Getting Started with Excel": `
        <h2>Getting Started with Excel</h2>
        <p>Learn the basics of Microsoft Excel and get comfortable with the interface.</p>
        
        <h3>Understanding the Excel Interface</h3>
        <ul>
          <li><strong>Ribbon:</strong> Contains all the commands and tools organized into tabs</li>
          <li><strong>Formula Bar:</strong> Displays and edits the content of the selected cell</li>
          <li><strong>Worksheet:</strong> The grid of cells where you enter and manipulate data</li>
          <li><strong>Sheet Tabs:</strong> Navigate between different worksheets in a workbook</li>
          <li><strong>Status Bar:</strong> Shows information and provides quick access to certain features</li>
        </ul>
        
        <h3>Cells, Rows, and Columns</h3>
        <p>Understand the basic structure of an Excel worksheet:</p>
        <ul>
          <li><strong>Cells:</strong> The individual boxes where data is entered, identified by column letter and row number (e.g., A1)</li>
          <li><strong>Rows:</strong> Horizontal groups of cells labeled with numbers</li>
          <li><strong>Columns:</strong> Vertical groups of cells labeled with letters</li>
        </ul>
        
        <h3>Basic Data Entry</h3>
        <p>Learn how to input different types of data:</p>
        <ul>
          <li><strong>Text:</strong> Words, labels, and any data not used in calculations</li>
          <li><strong>Numbers:</strong> Values that can be used in mathematical operations</li>
          <li><strong>Dates and Times:</strong> Special formats that allow date calculations</li>
        </ul>
        
        <h3>Navigation Techniques</h3>
        <p>Efficiently move around large worksheets using keyboard shortcuts and navigation tools.</p>
        
        <h3>Practice Exercise</h3>
        <p>Create a new workbook and enter different types of data (text, numbers, dates) in various cells.
        Practice navigating between cells using both the mouse and keyboard shortcuts.</p>
      `,
      "Basic Formulas": `
        <h2></h2>
        <p>Here, we will Learn how to perform calculations on your data using Excel formulas.</p>
       
        
        <h3></h3>
        <ul>
          <li><strong>--> Formula Structure:</strong> <br>All formulas begin with an equals sign (=)</li>

          <li><strong>--> Cell References:</strong> <br>Refer to other cells by their address (e.g., =A1+B1)</li>
          <li><strong>--> Operators:</strong> <br>Mathematical symbols like +, -, *, /, etc.</li>
        </ul>
        
        <h3>______________________________________</h3>
        <p>Here, we will Learn to create basic mathematical operations:</p>
        <ul>
          <li><strong>Addition:</strong> =A1+B1</li>
          <li><strong>Subtraction:</strong> =A1-B1</li>
          <li><strong>Multiplication:</strong> =A1*B1</li>
          <li><strong>Division:</strong> =A1/B1</li>
          <li><strong>Exponents:</strong> =A1^2 (squaring a number)</li>
        </ul>

      `,
      "Cell Formatting": `
        <h2>Cell Formatting in Excel</h2>
        <p>Learn how to make your data more readable and professional with proper formatting.</p>
        
        <h3>Number Formats</h3>
        <ul>
          <li><strong>General:</strong> Default format that adapts to the data type</li>
          <li><strong>Number:</strong> Display decimal places, thousand separators</li>
          <li><strong>Currency:</strong> Add currency symbols and decimal places</li>
          <li><strong>Percentage:</strong> Display numbers as percentages</li>
          <li><strong>Date & Time:</strong> Various formats for dates and times</li>
          <li><strong>Custom:</strong> Create your own number format codes</li>
        </ul>
        
        <h3>Text Formatting</h3>
        <ul>
          <li><strong>Font:</strong> Change typeface, size, color, and style</li>
          <li><strong>Alignment:</strong> Position text horizontally and vertically within cells</li>
          <li><strong>Text Wrapping:</strong> Display text on multiple lines within a cell</li>
          <li><strong>Merge Cells:</strong> Combine cells to create headers or titles</li>
        </ul>
        
        <h3>Cell Styles and Themes</h3>
        <p>Use Excel's built-in styles to quickly apply consistent formatting across your worksheet,
        and understand how themes affect the overall appearance.</p>
        
        <h3>Conditional Formatting</h3>
        <p>Format cells dynamically based on their values, such as highlighting high or low values,
        or using data bars and color scales to visualize the data.</p>
        
        <h3>Practice Exercise</h3>
        <p>Create a sales report with different types of data. Apply appropriate number formats,
        add headings with merged cells, and use conditional formatting to highlight top performers.</p>
      `,
      "Quiz 1": "You'll be tested on the Excel interface, basic formulas, and cell formatting.",
      "Working with Data": `
        <h2>Working with Data in Excel</h2>
        <p>Learn how to organize, manipulate, and analyze your data effectively.</p>
        
        <h3>Data Organization</h3>
        <ul>
          <li><strong>Sorting:</strong> Arrange data alphabetically, numerically, or chronologically</li>
          <li><strong>Filtering:</strong> Show only the data that meets specific criteria</li>
          <li><strong>Tables:</strong> Convert data ranges into structured tables with enhanced functionality</li>
        </ul>
        
        <h3>Data Entry Tips</h3>
        <ul>
          <li><strong>AutoFill:</strong> Quickly enter series of data or copy patterns</li>
          <li><strong>Flash Fill:</strong> Automatically extract or combine data from other columns</li>
          <li><strong>Data Validation:</strong> Control what users can enter in cells</li>
        </ul>
        
        <h3>Finding and Replacing Data</h3>
        <p>Use Excel's Find and Replace tools to locate specific values or make bulk changes to your data.</p>
        
        <h3>Removing Duplicates</h3>
        <p>Learn how to identify and remove duplicate entries from your data sets to maintain accuracy.</p>
        
        <h3>Practice Exercise</h3>
        <p>Create a customer database with multiple fields, convert it to a table, and practice sorting and filtering
        by different criteria. Add data validation to ensure consistent data entry.</p>
      `,
      "Charts and Graphs": `
        <h2>Charts and Graphs in Excel</h2>
        <p>Learn how to visually represent your data for better analysis and presentation.</p>
        
        <h3>Chart Types</h3>
        <ul>
          <li><strong>Column and Bar Charts:</strong> Compare values across categories</li>
          <li><strong>Line Charts:</strong> Show trends over time or categories</li>
          <li><strong>Pie Charts:</strong> Show proportions of a whole</li>
          <li><strong>Scatter Charts:</strong> Show relationships between two variables</li>
          <li><strong>Specialized Charts:</strong> Waterfall, histogram, sunburst, etc.</li>
        </ul>
        
        <h3>Creating Charts</h3>
        <p>Learn the step-by-step process of selecting data and creating different types of charts,
        understanding which chart type is appropriate for different data sets.</p>
        
        <h3>Customizing Charts</h3>
        <ul>
          <li><strong>Chart Elements:</strong> Add or remove titles, legends, data labels, etc.</li>
          <li><strong>Chart Styles:</strong> Apply predefined color schemes and layouts</li>
          <li><strong>Format Options:</strong> Customize colors, patterns, text, and other elements</li>
        </ul>
        
        <h3>Sparklines</h3>
        <p>Create miniature charts within a single cell to show trends alongside your data.</p>
        
        <h3>Practice Exercise</h3>
        <p>Using a sample data set of monthly sales figures, create different types of charts to visualize the data.
        Customize the charts with appropriate titles, labels, and formatting.</p>
      `,
      "Basic Functions": `
        <h2>Basic Functions in Excel</h2>
        <p>Learn how to use Excel's built-in functions to perform calculations and analyze data.</p>
        
        <h3>Function Basics</h3>
        <ul>
          <li><strong>Function Structure:</strong> =FUNCTION(arguments)</li>
          <li><strong>Function Arguments:</strong> Values, cell references, or expressions used in functions</li>
          <li><strong>Function Categories:</strong> Mathematical, statistical, logical, etc.</li>
        </ul>
        
        <h3>Math Functions</h3>
        <ul>
          <li><strong>SUM:</strong> Add up a range of numbers</li>
          <li><strong>AVERAGE:</strong> Calculate the average of a range</li>
          <li><strong>MAX and MIN:</strong> Find the highest or lowest value</li>
          <li><strong>COUNT:</strong> Count cells containing numbers</li>
          <li><strong>ROUND:</strong> Round numbers to a specified number of digits</li>
        </ul>
        
        <h3>Logical Functions</h3>
        <ul>
          <li><strong>IF:</strong> Perform conditional calculations</li>
          <li><strong>AND, OR, NOT:</strong> Combine multiple conditions</li>
        </ul>
        
        <h3>Text Functions</h3>
        <ul>
          <li><strong>CONCAT:</strong> Combine text from different cells</li>
          <li><strong>LEFT, RIGHT, MID:</strong> Extract parts of text strings</li>
          <li><strong>UPPER, LOWER, PROPER:</strong> Change text case</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Create a grade book for a class, using functions to calculate totals, averages, highest and lowest scores,
        and using IF functions to assign letter grades based on numerical scores.</p>
      `,
      "Quiz 2": "You'll be tested on working with data, creating charts, and using basic functions."
    },
    "PowerPoint Essentials": {
      "Creating Your First Presentation": `
        <h2>Creating Your First Presentation</h2>
        <p>Learn how to get started with PowerPoint and create a basic presentation.</p>
        
        <h3>Understanding the PowerPoint Interface</h3>
        <ul>
          <li><strong>Ribbon:</strong> Contains all commands organized into tabs</li>
          <li><strong>Slides Pane:</strong> Shows thumbnails of all slides in your presentation</li>
          <li><strong>Slide Canvas:</strong> The main area where you edit the current slide</li>
          <li><strong>Notes Pane:</strong> Add speaker notes for each slide</li>
          <li><strong>View Options:</strong> Different ways to view your presentation</li>
        </ul>
        
        <h3>Creating a New Presentation</h3>
        <ul>
          <li><strong>Blank Presentation:</strong> Start from scratch</li>
          <li><strong>Templates:</strong> Use pre-designed layouts and themes</li>
          <li><strong>Presentation Structure:</strong> Title slide, content slides, conclusion</li>
        </ul>
        
        <h3>Adding and Managing Slides</h3>
        <ul>
          <li><strong>New Slides:</strong> Add slides with different layouts</li>
          <li><strong>Duplicate:</strong> Copy existing slides</li>
          <li><strong>Reorder:</strong> Change the sequence of slides</li>
          <li><strong>Delete:</strong> Remove unwanted slides</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Create a new presentation with a title slide and at least three content slides.
        Practice adding, duplicating, reordering, and deleting slides.</p>
      `,
      "Slide Design Basics": `
        <h2>Slide Design Basics</h2>
        <p>Learn how to create visually appealing slides that effectively communicate your message.</p>
        
        <h3>Themes and Templates</h3>
        <ul>
          <li><strong>Themes:</strong> Pre-designed color schemes, fonts, and effects</li>
          <li><strong>Variants:</strong> Different color options within the same theme</li>
          <li><strong>Background Styles:</strong> Customize slide backgrounds</li>
        </ul>
        
        <h3>Slide Layouts</h3>
        <p>Different layouts serve different purposes in your presentation:</p>
        <ul>
          <li><strong>Title Slide:</strong> Introduces your presentation</li>
          <li><strong>Title and Content:</strong> Presents a heading with content underneath</li>
          <li><strong>Two Content:</strong> Displays content in two columns</li>
          <li><strong>Comparison:</strong> Shows information side by side</li>
          <li><strong>Picture with Caption:</strong> Features an image with descriptive text</li>
        </ul>
        
        <h3>Design Principles</h3>
        <ul>
          <li><strong>Simplicity:</strong> Avoid cluttered slides</li>
          <li><strong>Consistency:</strong> Maintain a uniform look throughout</li>
          <li><strong>Contrast:</strong> Ensure text is readable against backgrounds</li>
          <li><strong>Alignment:</strong> Line up elements for a professional appearance</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Take your presentation from the previous lesson and apply a theme. Experiment with different
        slide layouts and background styles. Apply design principles to create clean, readable slides.</p>
      `,
      "Adding Content": `
        <h2>Adding Content to PowerPoint Slides</h2>
        <p>Learn how to include various types of content to create engaging presentations.</p>
        
        <h3>Working with Text</h3>
        <ul>
          <li><strong>Text Boxes:</strong> Add and format text anywhere on a slide</li>
          <li><strong>Text Formatting:</strong> Change font, size, color, and style</li>
          <li><strong>Bullets and Numbering:</strong> Create organized lists</li>
          <li><strong>Text Effects:</strong> Add shadows, reflections, and other enhancements</li>
        </ul>
        
        <h3>Adding Visual Elements</h3>
        <ul>
          <li><strong>Images:</strong> Insert photos from your computer or online sources</li>
          <li><strong>Shapes:</strong> Add geometric shapes, lines, and arrows</li>
          <li><strong>Icons:</strong> Include simple, symbolic graphics</li>
          <li><strong>SmartArt:</strong> Create diagrams and visual lists</li>
          <li><strong>Charts:</strong> Visualize data with graphs</li>
        </ul>
        
        <h3>Working with Tables</h3>
        <p>Organize and present structured information using tables with customizable rows, columns, and formatting.</p>
        
        <h3>Media Elements</h3>
        <ul>
          <li><strong>Audio:</strong> Add sound effects or narration</li>
          <li><strong>Video:</strong> Embed video clips from files or online sources</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Enhance your presentation by adding various content elements to your slides:
        create a slide with bullet points, add relevant images to multiple slides,
        insert a simple chart or diagram, and add a table with information.</p>
      `,
      "Quiz 1": "You'll be tested on creating presentations, slide design, and adding various types of content.",
      "Animations and Transitions": `
        <h2></h2>
        <p>In this module, we will learn how to add movement to your presentation with animations and transitions.</p>
        
        <h3><strong>Slide Transitions</strong></h3>
        <ul>
          <li>--> Transition Types:</strong> Fade, Push, Wipe, Split, and more</li>
          <li>--> Transition Timing:</strong> Control duration and apply to multiple slides</li>
          <li>--> Transition Sound:</strong> Add audio effects to transitions</li>
          <li>--> Advance Options:</strong> Manual (on click) or automatic timing</li>
        </ul>
        <h3>______________________________________</h3>
        <h3><strong>Animations</strong></h3>
        <ul>
          <li>--> Entrance Effects:</strong> How objects appear on a slide</li>
          <li>--> Emphasis Effects:</strong> Call attention to objects already on the slide</li>
          <li>--> Exit Effects:</strong> How objects leave the slide</li>
          <li>--> Motion Paths:</strong> Custom movement for objects</li>
        </ul>
        ______________________________________
        <h3><strong>Animation Timing</strong></h3>
        <ul>
          <li>--> Start Options:</strong> On Click, With Previous, or After Previous</li>
          <li>--> Duration:</strong> Control how quickly animations play</li>
          <li>--> Delay:</strong> Add waiting time before animations start</li>
          <li>--> Animation Pane:</strong> Manage complex animations</li>
        </ul>
       
        

      `,
      "Presenting Tips": `
        <h2>Presenting Tips for PowerPoint</h2>
        <p>Learn techniques for delivering effective presentations using PowerPoint.</p>
        
        <h3>Presentation Mode</h3>
        <ul>
          <li><strong>Presenter View:</strong> See notes and upcoming slides while audience sees only the presentation</li>
          <li><strong>Navigation Tools:</strong> Move forward, backward, or to specific slides</li>
          <li><strong>Annotation Tools:</strong> Draw or highlight on slides during presentation</li>
        </ul>
        
        <h3>Presentation Setup</h3>
        <ul>
          <li><strong>Projector Setup:</strong> Connect and configure display settings</li>
          <li><strong>Resolution Considerations:</strong> Ensure your slides display properly</li>
          <li><strong>Backup Plans:</strong> Prepare for technical difficulties</li>
        </ul>
        
        <h3>Delivery Techniques</h3>
        <ul>
          <li><strong>Body Language:</strong> Positioning, gestures, and eye contact</li>
          <li><strong>Voice Modulation:</strong> Pace, volume, and tone</li>
          <li><strong>Engaging the Audience:</strong> Questions, interaction, and maintaining interest</li>
          <li><strong>Time Management:</strong> Keeping to schedule and knowing what to cut if needed</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Practice delivering your presentation using Presenter View. Record yourself if possible
        and evaluate your performance. Try using annotation tools during your presentation.</p>
      `,
      "Advanced Features": `
        <h2>Advanced PowerPoint Features</h2>
        <p>Explore powerful tools and techniques to create more sophisticated presentations.</p>
        
        <h3>Master Slides</h3>
        <ul>
          <li><strong>Slide Master:</strong> Control the default appearance of all slides</li>
          <li><strong>Layout Masters:</strong> Customize individual slide layouts</li>
          <li><strong>Background Graphics:</strong> Add consistent elements across slides</li>
        </ul>
        
        <h3>Interactive Elements</h3>
        <ul>
          <li><strong>Hyperlinks:</strong> Link to websites, files, or other slides</li>
          <li><strong>Action Buttons:</strong> Create navigation controls</li>
          <li><strong>Triggers:</strong> Start animations based on user actions</li>
          <li><strong>Zoom Features:</strong> Create interactive summaries</li>
        </ul>
        
        <h3>Multimedia Integration</h3>
        <ul>
          <li><strong>Advanced Video Options:</strong> Trim, style, and bookmark videos</li>
          <li><strong>Screen Recordings:</strong> Capture and embed software demonstrations</li>
          <li><strong>Audio Narration:</strong> Record voice-overs for slides</li>
        </ul>
        
        <h3>Sharing and Collaboration</h3>
        <p>Learn about various ways to share presentations, including export options,
        online presentation, and collaborative editing.</p>
        
        <h3>Practice Exercise</h3>
        <p>Create a Slide Master for your presentation to ensure consistency. Add hyperlinks
        to create navigation between sections. Insert a video or screen recording and customize
        its playback options.</p>
      `,
      "Quiz 2": "You'll be tested on animations, transitions, presentation techniques, and advanced PowerPoint features."
    }
  },
  ai: {
    "Introduction to AI": {
      "What is Artificial Intelligence": `
        <h2>What is Artificial Intelligence?</h2>
        <p>Understand the basics of AI and its significance in today's world.</p>
        
        <h3>Defining AI</h3>
        <p>Artificial Intelligence (AI) refers to computer systems designed to perform tasks that typically require human intelligence. 
        These include learning, reasoning, problem-solving, perception, and language understanding.</p>
        
        <h3>Brief History of AI</h3>
        <ul>
          <li><strong>1950s-1960s:</strong> The birth of AI as an academic discipline</li>
          <li><strong>1970s-1980s:</strong> The first "AI winter" - period of reduced funding and interest</li>
          <li><strong>1990s-2000s:</strong> Revival with focused applications and machine learning</li>
          <li><strong>2010s-Present:</strong> Explosion of AI capabilities due to deep learning, big data, and improved computing power</li>
        </ul>
        
        <h3>Types of AI</h3>
        <ul>
          <li><strong>Narrow/Weak AI:</strong> Systems designed for specific tasks (like virtual assistants, recommendation systems)</li>
          <li><strong>General/Strong AI:</strong> Hypothetical systems with human-like intelligence across various domains</li>
          <li><strong>Superintelligent AI:</strong> Theoretical AI that surpasses human intelligence</li>
        </ul>
        
        <h3>Key AI Approaches</h3>
        <ul>
          <li><strong>Rules-Based Systems:</strong> Follow explicit programmed instructions</li>
          <li><strong>Machine Learning:</strong> Learn patterns from data without explicit programming</li>
          <li><strong>Deep Learning:</strong> Use neural networks with multiple layers to learn complex patterns</li>
          <li><strong>Natural Language Processing:</strong> Understanding and generating human language</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Identify three AI applications you've used in your daily life and determine what type of AI they represent
        and what approach they likely use.</p>
      `,
      "Types of AI Tools": `
        <h2>Types of AI Tools</h2>
        <p>Explore the various categories of AI tools available for different purposes.</p>
        
        <h3>Generative AI Tools</h3>
        <ul>
          <li><strong>Text Generators:</strong> ChatGPT, GPT-4, Claude, Bard</li>
          <li><strong>Image Generators:</strong> DALL-E, Midjourney, Stable Diffusion</li>
          <li><strong>Audio Generators:</strong> Murf.ai, ElevenLabs, Descript</li>
          <li><strong>Video Generators:</strong> Runway Gen-2, Synthesia, D-ID</li>
        </ul>
        
        <h3>Productivity AI Tools</h3>
        <ul>
          <li><strong>Writing Assistants:</strong> Grammarly, Jasper, Copy.ai</li>
          <li><strong>Research Tools:</strong> Elicit, Consensus, Perplexity</li>
          <li><strong>Organization Tools:</strong> Notion AI, Mem.ai</li>
          <li><strong>Translation Tools:</strong> DeepL, Google Translate</li>
        </ul>
        
        <h3>Business AI Tools</h3>
        <ul>
          <li><strong>Customer Service:</strong> Chatbots, virtual assistants</li>
          <li><strong>Analytics:</strong> Predictive analytics, pattern recognition</li>
          <li><strong>Marketing:</strong> Personalization, content generation</li>
          <li><strong>HR Tools:</strong> Resume screening, candidate matching</li>
        </ul>
        
        <h3>Creative AI Tools</h3>
        <ul>
          <li><strong>Design Tools:</strong> Canva AI, Adobe Firefly</li>
          <li><strong>Music Creation:</strong> AIVA, Amper Music</li>
          <li><strong>Code Assistants:</strong> GitHub Copilot, Tabnine</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Choose one AI tool from each category and explore its features. Write a brief comparison
        of their capabilities, limitations, and potential use cases.</p>
      `,
      "Basic AI Concepts": `
        <h2>Basic AI Concepts</h2>
        <p>Learn the fundamental concepts and terminology used in artificial intelligence.</p>
        
        <h3>Data and Training</h3>
        <ul>
          <li><strong>Training Data:</strong> Information used to teach AI systems</li>
          <li><strong>Testing Data:</strong> Separate information used to evaluate performance</li>
          <li><strong>Supervised Learning:</strong> Learning from labeled examples</li>
          <li><strong>Unsupervised Learning:</strong> Finding patterns without labeled data</li>
          <li><strong>Reinforcement Learning:</strong> Learning through trial and error with rewards</li>
        </ul>
        
        <h3>Key Terminology</h3>
        <ul>
          <li><strong>Algorithm:</strong> Step-by-step procedure for solving problems</li>
          <li><strong>Model:</strong> The representation learned from data</li>
          <li><strong>Parameters:</strong> Variables that the model adjusts during learning</li>
          <li><strong>Neural Network:</strong> System inspired by human brain connections</li>
          <li><strong>Inference:</strong> Using a trained model to make predictions</li>
        </ul>
        
        <h3>Performance Metrics</h3>
        <ul>
          <li><strong>Accuracy:</strong> Percentage of correct predictions</li>
          <li><strong>Precision and Recall:</strong> Measures of relevance and completeness</li>
          <li><strong>Overfitting:</strong> When a model learns training data too well but performs poorly on new data</li>
          <li><strong>Underfitting:</strong> When a model fails to capture the underlying pattern</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Choose an AI application you use regularly. Try to identify what type of learning it uses,
        what kind of data it might be trained on, and how you could evaluate its performance.</p>
      `,
      "Quiz 1": "You'll be tested on AI definitions, types of AI tools, and basic AI concepts.",
      "AI Safety and Ethics": `
        <h2>AI Safety and Ethics</h2>
        <p>Understand the ethical considerations and safety challenges in AI development and use.</p>
        
        <h3>Ethical Concerns</h3>
        <ul>
          <li><strong>Bias and Fairness:</strong> AI systems can perpetuate or amplify existing biases</li>
          <li><strong>Privacy:</strong> Collection and use of personal data for training AI</li>
          <li><strong>Transparency:</strong> Understanding how AI makes decisions ("black box" problem)</li>
          <li><strong>Accountability:</strong> Who is responsible for AI actions and decisions</li>
        </ul>
        
        <h3>Potential Risks</h3>
        <ul>
          <li><strong>Misinformation:</strong> AI-generated content can spread false information</li>
          <li><strong>Job Displacement:</strong> Automation of tasks previously done by humans</li>
          <li><strong>Security Vulnerabilities:</strong> AI systems can be hacked or manipulated</li>
          <li><strong>Overreliance:</strong> Depending too much on AI systems for critical decisions</li>
        </ul>
        
        <h3>Responsible AI Development</h3>
        <ul>
          <li><strong>AI Governance:</strong> Policies and guidelines for AI development</li>
          <li><strong>Ethical Frameworks:</strong> Principles for designing and deploying AI</li>
          <li><strong>Bias Mitigation:</strong> Techniques to identify and reduce bias</li>
          <li><strong>Human Oversight:</strong> Keeping humans in the loop for important decisions</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Identify an AI application that raises ethical concerns. Analyze the potential issues
        and suggest ways the developers could address these concerns while maintaining the tool's usefulness.</p>
      `,
      "Popular AI Platforms": `
        <h2>Popular AI Platforms</h2>
        <p>Explore major AI platforms and services available for various applications.</p>
        
        <h3>Large Language Model Platforms</h3>
        <ul>
          <li><strong>OpenAI:</strong> GPT models, DALL-E, Whisper</li>
          <li><strong>Anthropic:</strong> Claude models</li>
          <li><strong>Google AI:</strong> Gemini models, Bard</li>
          <li><strong>Meta AI:</strong> LLaMA models</li>
        </ul>
        
        <h3>Cloud AI Services</h3>
        <ul>
          <li><strong>AWS AI Services:</strong> Amazon's suite of AI tools</li>
          <li><strong>Microsoft Azure AI:</strong> Machine learning and cognitive services</li>
          <li><strong>Google Cloud AI:</strong> Machine learning and AI solutions</li>
          <li><strong>IBM Watson:</strong> AI platform for business applications</li>
        </ul>
        
        <h3>Open Source AI</h3>
        <ul>
          <li><strong>Hugging Face:</strong> Repository of open-source models and datasets</li>
          <li><strong>TensorFlow and PyTorch:</strong> Popular frameworks for building AI models</li>
          <li><strong>Open AI Models:</strong> Community-maintained AI models</li>
        </ul>
        
        <h3>Specialized AI Platforms</h3>
        <ul>
          <li><strong>Computer Vision:</strong> Platforms for image and video analysis</li>
          <li><strong>Natural Language Processing:</strong> Text analysis and generation services</li>
          <li><strong>Speech Recognition:</strong> Voice-to-text and analysis tools</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Create accounts for two different AI platforms (choose free tiers). Compare their interfaces,
        capabilities, pricing models, and ease of use for a simple task like text generation or image creation.</p>
      `,
      "AI in Daily Life": `
        <h2>AI in Daily Life</h2>
        <p>Discover how AI is already integrated into everyday products and services.</p>
        
        <h3>Personal Devices</h3>
        <ul>
          <li><strong>Smartphones:</strong> Virtual assistants, camera features, predictive text</li>
          <li><strong>Smart Speakers:</strong> Voice recognition, personalized responses</li>
          <li><strong>Wearables:</strong> Health monitoring, activity recognition</li>
        </ul>
        
        <h3>Home Applications</h3>
        <ul>
          <li><strong>Smart Home Systems:</strong> Learning thermostats, security systems</li>
          <li><strong>Entertainment:</strong> Content recommendations, smart TVs</li>
          <li><strong>Home Robots:</strong> Robot vacuums with mapping capabilities</li>
        </ul>
        
        <h3>Digital Services</h3>
        <ul>
          <li><strong>Social Media:</strong> Feed algorithms, content moderation</li>
          <li><strong>E-commerce:</strong> Product recommendations, pricing algorithms</li>
          <li><strong>Banking:</strong> Fraud detection, customer service chatbots</li>
          <li><strong>Navigation:</strong> Traffic prediction, route optimization</li>
        </ul>
        
        <h3>Public Services</h3>
        <ul>
          <li><strong>Healthcare:</strong> Diagnostic assistance, treatment recommendations</li>
          <li><strong>Transportation:</strong> Traffic management, ride-sharing optimization</li>
          <li><strong>Public Safety:</strong> Surveillance systems, emergency response</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Keep a journal for one day noting every interaction with AI-enabled systems.
        At the end of the day, categorize these interactions and reflect on how they affected your experience.</p>
      `,
      "Quiz 2": "You'll be tested on AI safety and ethics, popular AI platforms, and AI applications in daily life."
    },
    "Prompt Engineering": {
      "Understanding Prompts": `
        <h2>Understanding Prompts</h2>
        <p>Learn what prompts are and why they're important when working with AI systems.</p>
        
        <h3>What is a Prompt?</h3>
        <p>A prompt is the input text provided to an AI to instruct it on what you want it to do or generate.
        It's essentially how you communicate with the AI to get the desired output.</p>
        
        <h3>Types of Prompts</h3>
        <ul>
          <li><strong>Simple Queries:</strong> Basic questions seeking information</li>
          <li><strong>Instructions:</strong> Directions for specific tasks or outputs</li>
          <li><strong>Creative Requests:</strong> Asking for stories, poems, or creative content</li>
          <li><strong>Conversational:</strong> Natural dialogue-style interactions</li>
          <li><strong>System Prompts:</strong> Setting overall behavior and constraints</li>
        </ul>
        
        <h3>How AI Interprets Prompts</h3>
        <p>Understanding how large language models process and respond to prompts:</p>
        <ul>
          <li><strong>Pattern Recognition:</strong> AI identifies patterns in your request</li>
          <li><strong>Context Windows:</strong> How much information AI can consider at once</li>
          <li><strong>Token Limitations:</strong> How input length affects responses</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Take a simple task (like summarizing a paragraph) and write five different prompts asking an AI to perform this task.
        Test each prompt with an AI tool and compare the results.</p>
      `,
      "Writing Effective Prompts": `
        <h2>Writing Effective Prompts</h2>
        <p>Learn techniques to craft prompts that produce better AI responses.</p>
        
        <h3>Clarity and Specificity</h3>
        <ul>
          <li><strong>Be Direct:</strong> Clearly state what you want</li>
          <li><strong>Avoid Ambiguity:</strong> Use precise language</li>
          <li><strong>Single Tasks:</strong> Focus on one request at a time</li>
          <li><strong>Examples:</strong> ❌ "Tell me about stuff" ✅ "Explain quantum computing in simple terms"</li>
        </ul>
        
        <h3>Structuring Your Prompt</h3>
        <ul>
          <li><strong>Context First:</strong> Provide background information</li>
          <li><strong>Clear Instructions:</strong> State the exact task</li>
          <li><strong>Output Format:</strong> Specify how you want the response presented</li>
          <li><strong>Example Structure:</strong> "I am [role]. I need [task] because [context]. Please provide [specific output format]."</li>
        </ul>
        
        <h3>Specifying Parameters</h3>
        <ul>
          <li><strong>Tone:</strong> Professional, casual, technical, simple, etc.</li>
          <li><strong>Length:</strong> Short summary, detailed explanation, specific word count</li>
          <li><strong>Audience:</strong> Who the response is intended for</li>
          <li><strong>Examples:</strong> "Explain blockchain to a 10-year-old in under 100 words" or "Write a professional email to a potential client"</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Rewrite three ineffective prompts using the techniques learned. Test both versions with an AI tool
        and analyze the differences in the responses.</p>
      `,
      "Context and Details": `
        <h2>Context and Details in Prompts</h2>
        <p>Learn how to provide the right amount of context and detail for optimal AI responses.</p>
        
        <h3>Providing Context</h3>
        <ul>
          <li><strong>Background Information:</strong> Relevant facts and circumstances</li>
          <li><strong>Purpose:</strong> Why you need this information</li>
          <li><strong>Constraints:</strong> Any limitations or requirements</li>
          <li><strong>Example:</strong> "I'm planning a team-building event for 15 people with varying fitness levels and a budget of $500."</li>
        </ul>
        
        <h3>Balancing Detail Level</h3>
        <ul>
          <li><strong>Too Little:</strong> Vague prompts lead to generic responses</li>
          <li><strong>Too Much:</strong> Overwhelming with irrelevant details can confuse the AI</li>
          <li><strong>Relevant Details:</strong> Focus on information that impacts the response</li>
        </ul>
        
        <h3>Using Examples</h3>
        <p>Providing examples in your prompt helps the AI understand your expectations:</p>
        <ul>
          <li><strong>Few-Shot Learning:</strong> Giving sample input/output pairs</li>
          <li><strong>Style Examples:</strong> Showing the tone or format you want</li>
          <li><strong>Example:</strong> "I need to write product descriptions like this: [example]. Please write three more for these products: [list]."</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Take a complex task (like creating a marketing plan) and write three prompts with different levels of context:
        minimal, moderate, and extensive. Test each with an AI tool and evaluate which produces the most useful response.</p>
      `,
      "Quiz 1": "You'll be tested on understanding prompts, writing effective prompts, and using context and details.",
      "Advanced Prompt Techniques": `
        <h2>Advanced Prompt Techniques</h2>
        <p>Explore sophisticated prompting strategies for more powerful and precise AI responses.</p>
        
        <h3>Role Prompting</h3>
        <ul>
          <li><strong>Concept:</strong> Asking the AI to assume a specific role or perspective</li>
          <li><strong>Implementation:</strong> "Act as a [role] and [task]"</li>
          <li><strong>Examples:</strong> "Act as a cybersecurity expert and review these security practices" or "Respond as if you were a historian specializing in Ancient Rome"</li>
        </ul>
        
        <h3>Chain-of-Thought Prompting</h3>
        <ul>
          <li><strong>Concept:</strong> Asking the AI to show its reasoning step by step</li>
          <li><strong>Implementation:</strong> "Think through this problem step by step" or "Walk me through your reasoning"</li>
          <li><strong>Benefits:</strong> More accurate results for complex problems, transparency in reasoning</li>
        </ul>
        
        <h3>Multi-turn Prompting</h3>
        <ul>
          <li><strong>Concept:</strong> Building on previous exchanges to refine outputs</li>
          <li><strong>Implementation:</strong> Iterative conversations with feedback and adjustment requests</li>
          <li><strong>Strategy:</strong> Start broad, then get specific based on initial responses</li>
        </ul>
        
        <h3>Prompt Templates and Frameworks</h3>
        <p>Structured approaches for consistent results:</p>
        <ul>
          <li><strong>CRISPE:</strong> Capacity, Role, Insight, Specificity, Personality, Experiment</li>
          <li><strong>TAG:</strong> Task, Action, Goal</li>
          <li><strong>Custom Templates:</strong> Developing your own formats for recurring tasks</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Select a complex problem and apply each of these techniques (role prompting, chain-of-thought, multi-turn).
        Compare the results and note which approach works best for which types of tasks.</p>
      `,
      "Common Mistakes": `
        <h2>Common Prompt Engineering Mistakes</h2>
        <p>Learn to recognize and avoid frequent errors that lead to poor AI responses.</p>
        
        <h3>Vagueness and Ambiguity</h3>
        <ul>
          <li><strong>Problem:</strong> Unclear instructions lead to misinterpreted requests</li>
          <li><strong>Example:</strong> "Make this better" instead of specific improvement instructions</li>
          <li><strong>Solution:</strong> Be explicit about what you want and what "better" means in context</li>
        </ul>
        
        <h3>Overly Complex Requests</h3>
        <ul>
          <li><strong>Problem:</strong> Asking too many things in one prompt</li>
          <li><strong>Example:</strong> "Write a marketing plan, create a budget, design a logo, and draft an email"</li>
          <li><strong>Solution:</strong> Break down complex tasks into separate, focused prompts</li>
        </ul>
        
        <h3>Ineffective Constraints</h3>
        <ul>
          <li><strong>Problem:</strong> Setting contradictory or impossible requirements</li>
          <li><strong>Example:</strong> "Write a detailed 2000-word analysis in 100 words"</li>
          <li><strong>Solution:</strong> Ensure constraints are reasonable and aligned with your goals</li>
        </ul>
        
        <h3>Ignoring AI Limitations</h3>
        <ul>
          <li><strong>Problem:</strong> Asking for information beyond AI capabilities or knowledge cutoff</li>
          <li><strong>Example:</strong> Requesting very recent information or specialized calculations</li>
          <li><strong>Solution:</strong> Understand AI boundaries and provide necessary context</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Review a collection of ineffective prompts and identify the specific mistakes in each.
        Rewrite each prompt to correct the issues while maintaining the original intent.</p>
      `,
      "Best Practices": `
        <h2>Prompt Engineering Best Practices</h2>
        <p>Master the principles and strategies for consistently effective AI interactions.</p>
        
        <h3>Iterative Refinement</h3>
        <ul>
          <li><strong>Start Simple:</strong> Begin with basic prompts and build complexity</li>
          <li><strong>Feedback Loop:</strong> Use AI responses to improve your next prompt</li>
          <li><strong>Documentation:</strong> Keep track of what works for future reference</li>
        </ul>
        
        <h3>Combining Techniques</h3>
        <ul>
          <li><strong>Layered Approach:</strong> Use multiple strategies in a single prompt</li>
          <li><strong>Example:</strong> Combining role prompting with chain-of-thought and specific formatting requirements</li>
          <li><strong>Balance:</strong> Finding the right mix without overcomplicating</li>
        </ul>
        
        <h3>Ethical Considerations</h3>
        <ul>
          <li><strong>Responsible Use:</strong> Avoiding harmful, manipulative, or deceptive prompts</li>
          <li><strong>Bias Awareness:</strong> Recognizing and mitigating potential biases in your prompts</li>
          <li><strong>Privacy:</strong> Being cautious about sharing sensitive information</li>
        </ul>
        
        <h3>System Design Integration</h3>
        <p>How prompt engineering fits into larger workflows and applications:</p>
        <ul>
          <li><strong>Prompt Libraries:</strong> Building reusable prompt collections</li>
          <li><strong>Quality Assurance:</strong> Testing and validating prompt effectiveness</li>
          <li><strong>User Experience:</strong> Designing intuitive prompt interfaces for non-experts</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Develop a prompt strategy for a specific recurring task. Create a template with variables,
        test it with various inputs, refine based on results, and document your approach for future use.</p>
      `,
      "Quiz 2": "You'll be tested on advanced prompt techniques, common mistakes, and best practices in prompt engineering."
    }
  },
  mail: {
    "Email Management": {
      "Email Basics": `
        <h2>Email Basics</h2>
        <p>Learn the fundamentals of email communication and account management.</p>
        
        <h3>Understanding Email Accounts</h3>
        <ul>
          <li><strong>Email Providers:</strong> Gmail, Outlook, Yahoo, etc.</li>
          <li><strong>Email Address Structure:</strong> username@domain.com</li>
          <li><strong>Personal vs. Work Email:</strong> Different purposes and etiquette</li>
          <li><strong>Email Clients:</strong> Web-based, desktop applications, mobile apps</li>
        </ul>
        
        <h3>Email Interface Navigation</h3>
        <ul>
          <li><strong>Inbox:</strong> Where new messages arrive</li>
          <li><strong>Compose:</strong> Creating new emails</li>
          <li><strong>Folders/Labels:</strong> Organizing your messages</li>
          <li><strong>Search:</strong> Finding specific emails</li>
          <li><strong>Settings:</strong> Customizing your email experience</li>
        </ul>
        
        <h3>Basic Email Functions</h3>
        <ul>
          <li><strong>Composing:</strong> Creating new messages</li>
          <li><strong>Replying:</strong> Responding to received emails</li>
          <li><strong>Forwarding:</strong> Sending received emails to others</li>
          <li><strong>Attachments:</strong> Sending files via email</li>
          <li><strong>CC and BCC:</strong> Carbon copy and blind carbon copy</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Set up a new email account (or use an existing one) and practice composing, sending,
        replying to, and forwarding emails. Try attaching different types of files and using CC and BCC features.</p>
      `,
      "Writing Professional Emails": `
        <h2>Writing Professional Emails</h2>
        <p>Learn how to craft clear, effective, and professional email messages.</p>
        
        <h3>Email Structure</h3>
        <ul>
          <li><strong>Subject Line:</strong> Clear, concise, and relevant</li>
          <li><strong>Greeting:</strong> Appropriate salutations for different contexts</li>
          <li><strong>Body:</strong> Main content, well-organized with paragraphs</li>
          <li><strong>Closing:</strong> Professional sign-off and signature</li>
        </ul>
        
        <h3>Professional Tone</h3>
        <ul>
          <li><strong>Formality Level:</strong> Adjusting based on recipient and context</li>
          <li><strong>Clarity:</strong> Direct and unambiguous language</li>
          <li><strong>Brevity:</strong> Keeping messages concise but complete</li>
          <li><strong>Politeness:</strong> Courteous language and requests</li>
        </ul>
        
        <h3>Common Email Types</h3>
        <ul>
          <li><strong>Request Emails:</strong> Asking for information or action</li>
          <li><strong>Information Emails:</strong> Providing updates or details</li>
          <li><strong>Introduction Emails:</strong> Connecting with new contacts</li>
          <li><strong>Thank You Emails:</strong> Expressing gratitude</li>
          <li><strong>Follow-up Emails:</strong> Continuing previous conversations</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Draft three different types of professional emails: a request to a colleague,
        an information update to a team, and a thank you message to a client or supervisor.
        Review for professionalism and clarity.</p>
      `,
      "Email Organization": `
        <h2>Email Organization</h2>
        <p>Learn strategies to keep your inbox manageable and find important messages quickly.</p>
        
        <h3>Folder/Label Systems</h3>
        <ul>
          <li><strong>Categories:</strong> Project-based, client-based, or department-based</li>
          <li><strong>Priority Labels:</strong> Urgent, Follow-up, Reference</li>
          <li><strong>Status Labels:</strong> To-do, In Progress, Completed</li>
          <li><strong>Implementing:</strong> Creating a logical folder structure</li>
        </ul>
        
        <h3>Email Filters and Rules</h3>
        <ul>
          <li><strong>Automatic Sorting:</strong> Sending emails to specific folders based on criteria</li>
          <li><strong>Priority Inbox:</strong> Setting up important emails to stand out</li>
          <li><strong>Filter Criteria:</strong> Sender, subject, keywords, attachments</li>
          <li><strong>Examples:</strong> Newsletter filter, client email priority</li>
        </ul>
        
        <h3>Email Cleanup Strategies</h3>
        <ul>
          <li><strong>Archive vs. Delete:</strong> When to use each option</li>
          <li><strong>Regular Maintenance:</strong> Daily and weekly inbox cleanup routines</li>
          <li><strong>Search Techniques:</strong> Finding old emails when needed</li>
          <li><strong>Storage Management:</strong> Handling attachment storage</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Create a folder structure for your email account based on your needs.
        Set up at least three filters to automatically organize incoming messages.
        Perform an inbox cleanup using archive and delete appropriately.</p>
      `,
      "Quiz 1": "You'll be tested on email basics, writing professional emails, and email organization strategies.",
      "Managing Inbox": `
        <h2>Managing Your Inbox</h2>
        <p>Learn techniques to control email volume and maintain productivity.</p>
        
        <h3>Inbox Management Philosophies</h3>
        <ul>
          <li><strong>Inbox Zero:</strong> Keeping inbox completely processed</li>
          <li><strong>Important First:</strong> Focusing on priority messages</li>
          <li><strong>Scheduled Processing:</strong> Designated email checking times</li>
          <li><strong>Four Ds:</strong> Do, Delegate, Defer, Delete</li>
        </ul>
        
        <h3>Email Processing Workflow</h3>
        <ul>
          <li><strong>Initial Scan:</strong> Quick review for urgent items</li>
          <li><strong>Prioritization:</strong> Identifying what needs immediate attention</li>
          <li><strong>Action Steps:</strong> Respond, file, delegate, or schedule</li>
          <li><strong>Follow-up System:</strong> Tracking emails requiring later action</li>
        </ul>
        
        <h3>Productivity Tools and Features</h3>
        <ul>
          <li><strong>Templates:</strong> Saving responses for common inquiries</li>
          <li><strong>Snooze:</strong> Temporarily removing emails until needed</li>
          <li><strong>Quick Actions:</strong> One-click responses and processing</li>
          <li><strong>Email Scheduling:</strong> Sending at optimal times</li>
          <li><strong>Keyboard Shortcuts:</strong> Speeding up email processing</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Apply an inbox management philosophy to your email for one week. Create at least two email templates
        for common responses. Practice using snooze features and quick actions to process emails efficiently.</p>
      `,
      "Email Security": `
        <h2>Email Security</h2>
        <p>Learn how to protect your email accounts and avoid common security threats.</p>
        
        <h3>Account Security</h3>
        <ul>
          <li><strong>Strong Passwords:</strong> Creating and managing secure passwords</li>
          <li><strong>Two-Factor Authentication:</strong> Adding an extra layer of security</li>
          <li><strong>Recovery Options:</strong> Setting up backup methods</li>
          <li><strong>Account Monitoring:</strong> Checking for suspicious activity</li>
        </ul>
        
        <h3>Email Threats</h3>
        <ul>
          <li><strong>Phishing:</strong> Deceptive emails attempting to steal information</li>
          <li><strong>Malware:</strong> Harmful software delivered via email</li>
          <li><strong>Spam:</strong> Unsolicited bulk messages</li>
          <li><strong>Social Engineering:</strong> Psychological manipulation tactics</li>
        </ul>
        
        <h3>Safety Practices</h3>
        <ul>
          <li><strong>Link Verification:</strong> Checking before clicking</li>
          <li><strong>Attachment Caution:</strong> Only opening expected, safe files</li>
          <li><strong>Sender Verification:</strong> Confirming email sources</li>
          <li><strong>Information Sharing:</strong> Being careful about what you share</li>
          <li><strong>Public Wi-Fi:</strong> Taking precautions on unsecured networks</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Review your email security settings and enable two-factor authentication if available.
        Examine your inbox to identify potential phishing attempts. Create a personal checklist
        for evaluating suspicious emails.</p>
      `,
      "Email Etiquette": `
        <h2>Email Etiquette</h2>
        <p>Learn the unwritten rules and best practices for professional email communication.</p>
        
        <h3>Response Times</h3>
        <ul>
          <li><strong>Expected Timeframes:</strong> Industry and relationship standards</li>
          <li><strong>Urgent vs. Non-urgent:</strong> Appropriate response times</li>
          <li><strong>Out-of-Office Notifications:</strong> When and how to use them</li>
          <li><strong>Acknowledgment Emails:</strong> Quick replies to show receipt</li>
        </ul>
        
        <h3>Communication Style</h3>
        <ul>
          <li><strong>Tone Considerations:</strong> How messages might be interpreted</li>
          <li><strong>Formatting:</strong> Appropriate use of bold, italics, all caps</li>
          <li><strong>Emoji and Humor:</strong> When they're appropriate (and when not)</li>
          <li><strong>Cultural Awareness:</strong> Adapting to international norms</li>
        </ul>
        
        <h3>Common Courtesies</h3>
        <ul>
          <li><strong>Reply All Protocol:</strong> When to use and when to avoid</li>
          <li><strong>Introduction Etiquette:</strong> How to introduce people via email</li>
          <li><strong>Thread Management:</strong> Keeping conversations organized</li>
          <li><strong>Attachment Courtesy:</strong> Size considerations and formats</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Review your sent emails from the past week and identify areas where you could improve
        your email etiquette. Draft responses to three scenarios: a frustrated client, a team announcement,
        and an introduction between colleagues.</p>
      `,
      "Quiz 2": "You'll be tested on inbox management, email security, and email etiquette."
    },
    "Virtual Meetings": {
      "Getting Started with Google Meet": `
        <h2>Getting Started with Google Meet</h2>
        <p>Learn the basics of using Google Meet for virtual meetings and video calls.</p>
        
        <h3>Accessing Google Meet</h3>
        <ul>
          <li><strong>Web Browser:</strong> meet.google.com</li>
          <li><strong>Gmail Integration:</strong> Starting meetings from email</li>
          <li><strong>Google Calendar:</strong> Scheduling and joining meetings</li>
          <li><strong>Mobile App:</strong> Using Meet on smartphones and tablets</li>
        </ul>
        
        <h3>Creating Meetings</h3>
        <ul>
          <li><strong>Instant Meetings:</strong> Starting a meeting immediately</li>
          <li><strong>Scheduled Meetings:</strong> Planning ahead via Calendar</li>
          <li><strong>Meeting Links:</strong> Creating and sharing join links</li>
          <li><strong>Adding Participants:</strong> Inviting others to your meeting</li>
        </ul>
        
        <h3>Joining Meetings</h3>
        <ul>
          <li><strong>Via Link:</strong> Clicking meeting links in emails or messages</li>
          <li><strong>Via Calendar:</strong> Joining from calendar events</li>
          <li><strong>Via Code:</strong> Entering meeting codes</li>
          <li><strong>Pre-Join Screen:</strong> Audio and video setup before entering</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Create a Google Meet meeting and send invitations to colleagues or friends.
        Practice joining the meeting on different devices. Experiment with creating both
        instant and scheduled meetings.</p>
      `,
      "Meeting Controls": `
        <h2>Meeting Controls in Virtual Meetings</h2>
        <p>Master the essential controls and features available during online meetings.</p>
        
        <h3>Audio and Video Controls</h3>
        <ul>
          <li><strong>Mute/Unmute:</strong> Controlling your microphone</li>
          <li><strong>Camera On/Off:</strong> Toggling your video feed</li>
          <li><strong>Device Selection:</strong> Choosing microphones, speakers, and cameras</li>
          <li><strong>Audio Testing:</strong> Checking sound before and during meetings</li>
        </ul>
        
        <h3>Participation Tools</h3>
        <ul>
          <li><strong>Hand Raising:</strong> Signaling you want to speak</li>
          <li><strong>Chat Function:</strong> Sending text messages to participants</li>
          <li><strong>Reactions:</strong> Quick emoji responses</li>
          <li><strong>Polls:</strong> Gathering feedback from participants</li>
        </ul>
        
        <h3>Host Controls</h3>
        <ul>
          <li><strong>Participant Management:</strong> Admitting, removing, muting participants</li>
          <li><strong>Recording:</strong> Capturing the meeting</li>
          <li><strong>Breakout Rooms:</strong> Creating smaller discussion groups</li>
          <li><strong>Meeting Security:</strong> Password protection and waiting rooms</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Host a practice meeting with friends or colleagues and try out different meeting controls.
        Practice muting/unmuting, turning video on/off, using chat, and (if hosting) managing participants
        and recording the session.</p>
      `,
      "Screen Sharing": `
        <h2>Screen Sharing in Virtual Meetings</h2>
        <p>Learn how to effectively share your screen, applications, and content during online meetings.</p>
        
        <h3>Screen Sharing Basics</h3>
        <ul>
          <li><strong>Starting a Share:</strong> Accessing screen share controls</li>
          <li><strong>Share Options:</strong> Entire screen vs. specific window vs. tab</li>
          <li><strong>Audio Sharing:</strong> Including computer audio in your share</li>
          <li><strong>Stopping a Share:</strong> Ending your screen presentation</li>
        </ul>
        
        <h3>Content Preparation</h3>
        <ul>
          <li><strong>Clean Desktop:</strong> Organizing before sharing</li>
          <li><strong>Document Access:</strong> Having files ready</li>
          <li><strong>Multiple Monitors:</strong> Managing displays</li>
          <li><strong>Notifications:</strong> Disabling alerts during sharing</li>
        </ul>
        
        <h3>Presentation Techniques</h3>
        <ul>
          <li><strong>Highlighting:</strong> Drawing attention to specific areas</li>
          <li><strong>Annotation Tools:</strong> Drawing and marking on shared content</li>
          <li><strong>Presenter View:</strong> Managing notes while presenting</li>
          <li><strong>Switching Content:</strong> Smoothly changing between applications</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Prepare a short presentation and practice sharing your screen in a meeting.
        Try different sharing options (full screen, specific window) and practice using
        annotation tools if available. Ask for feedback on visibility and clarity.</p>
      `,
      "Quiz 1": "You'll be tested on getting started with Google Meet, meeting controls, and screen sharing techniques.",
      "Virtual Meeting Etiquette": `
        <h2>Virtual Meeting Etiquette</h2>
        <p>Learn the proper behavior and protocols for professional virtual meetings.</p>
        
        <h3>Before the Meeting</h3>
        <ul>
          <li><strong>Testing Technology:</strong> Checking audio, video, and internet beforehand</li>
          <li><strong>Appropriate Background:</strong> Creating a professional setting</li>
          <li><strong>Punctuality:</strong> Joining a few minutes early</li>
          <li><strong>Meeting Materials:</strong> Having necessary documents ready</li>
        </ul>
        
        <h3>During the Meeting</h3>
        <ul>
          <li><strong>Muting Protocol:</strong> Staying muted when not speaking</li>
          <li><strong>Video Etiquette:</strong> Appropriate on-camera behavior</li>
          <li><strong>Participation:</strong> Engaging without interrupting</li>
          <li><strong>Chat Usage:</strong> Appropriate use of text chat</li>
          <li><strong>Attentiveness:</strong> Avoiding multitasking</li>
        </ul>
        
        <h3>Special Situations</h3>
        <ul>
          <li><strong>Large Meetings:</strong> Behavior in webinars or large gatherings</li>
          <li><strong>International Meetings:</strong> Considering time zones and cultural differences</li>
          <li><strong>Technical Issues:</strong> Handling problems gracefully</li>
          <li><strong>Background Distractions:</strong> Managing unexpected interruptions</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Create a personal virtual meeting checklist covering preparation, participation, and
        follow-up. Attend your next virtual meeting with this checklist in mind and evaluate
        your performance afterward.</p>
      `,
      "Scheduling Meetings": `
        <h2>Scheduling Virtual Meetings</h2>
        <p>Learn how to efficiently plan, schedule, and manage online meeting calendars.</p>
        
        <h3>Meeting Planning</h3>
        <ul>
          <li><strong>Purpose Definition:</strong> Clarifying meeting objectives</li>
          <li><strong>Participant List:</strong> Determining who needs to attend</li>
          <li><strong>Duration Planning:</strong> Setting appropriate meeting length</li>
          <li><strong>Agenda Creation:</strong> Outlining topics and time allocation</li>
        </ul>
        
        <h3>Calendar Tools</h3>
        <ul>
          <li><strong>Google Calendar:</strong> Creating and managing events</li>
          <li><strong>Meeting Templates:</strong> Saving recurring meeting details</li>
          <li><strong>Time Zone Management:</strong> Handling international scheduling</li>
          <li><strong>Availability Checking:</strong> Finding suitable times for all participants</li>
        </ul>
        
        <h3>Meeting Invitations</h3>
        <ul>
          <li><strong>Essential Information:</strong> What to include in invites</li>
          <li><strong>Virtual Meeting Links:</strong> Generating and sharing access information</li>
          <li><strong>Calendar Attachments:</strong> Adding agenda and documents</li>
          <li><strong>RSVP Management:</strong> Tracking responses and reminders</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Schedule a virtual meeting with a clear purpose, create an agenda, and send proper invitations
        with all necessary details. Practice using calendar features like finding available times,
        setting reminders, and attaching relevant documents.</p>
      `,
      "Advanced Features": `
        <h2>Advanced Virtual Meeting Features</h2>
        <p>Explore powerful tools and techniques for more effective online meetings.</p>
        
        <h3>Collaborative Tools</h3>
        <ul>
          <li><strong>Digital Whiteboards:</strong> Visual collaboration spaces</li>
          <li><strong>Real-time Document Editing:</strong> Working together on files</li>
          <li><strong>Q&A and Polling:</strong> Gathering participant input</li>
          <li><strong>Breakout Sessions:</strong> Small group discussions</li>
        </ul>
        
        <h3>Meeting Enhancement</h3>
        <ul>
          <li><strong>Virtual Backgrounds:</strong> Professional and branded options</li>
          <li><strong>Lighting and Audio:</strong> Improving presentation quality</li>
          <li><strong>Dual Monitors:</strong> Managing presentation and participants</li>
          <li><strong>Presentation Mode:</strong> Speaker spotlight and focus tools</li>
        </ul>
        
        <h3>Meeting Management</h3>
        <ul>
          <li><strong>Recording:</strong> Capturing meetings for reference or sharing</li>
          <li><strong>Transcription:</strong> Converting speech to searchable text</li>
          <li><strong>Action Item Tracking:</strong> Managing follow-ups</li>
          <li><strong>Analytics:</strong> Reviewing participation and engagement</li>
        </ul>
        
        <h3>Practice Exercise</h3>
        <p>Plan and conduct a meeting that incorporates at least three advanced features
        (such as polling, breakout rooms, collaborative whiteboarding, or recording with transcription).
        Gather feedback on how these features enhanced the meeting experience.</p>
      `,
      "Quiz 2": "You'll be tested on virtual meeting etiquette, scheduling meetings, and advanced meeting features."
    }
  }
};

// Data structure to hold all quiz questions
const quizData: Record<string, Record<string, Record<string, QuizQuestion[]>>> = {
  microsoft: {
    "Microsoft Word Basics": {
      "Quiz 1": [
        {
          question: "Which element of the Word interface contains tabs like Home, Insert, and Design?",
          options: ["Quick Access Toolbar", "Ribbon", "Status Bar", "Navigation Pane"],
          correctAnswer: 1
        },
        {
          question: "To emphasize important text in a document, you can use which formatting option?",
          options: ["Strikethrough", "Subscript", "Bold", "Small Caps"],
          correctAnswer: 2
        },
        {
          question: "Which of the following is NOT a paragraph formatting option in Word?",
          options: ["Alignment", "Line Spacing", "Indentation", "Font Type"],
          correctAnswer: 3
        },
        {
          question: "What is the standard file format for Microsoft Word documents?",
          options: [".txt", ".docx", ".pdf", ".rtf"],
          correctAnswer: 1
        },
        {
          question: "Which feature helps you quickly copy formatting from one piece of text to another?",
          options: ["Format Painter", "Quick Styles", "Copy & Paste", "Text Effects"],
          correctAnswer: 0
        }
      ],
      "Quiz 2": [
        {
          question: "Which text wrapping option places text above and below an image but not beside it?",
          options: ["In Line with Text", "Square", "Tight", "Through"],
          correctAnswer: 0
        },
        {
          question: "To create a table with 5 columns and 3 rows, which menu should you use?",
          options: ["Insert", "Design", "Layout", "References"],
          correctAnswer: 0
        },
        {
          question: "Which page orientation results in a document that is wider than it is tall?",
          options: ["Portrait", "Landscape", "Legal", "A4"],
          correctAnswer: 1
        },
        {
          question: "What element appears at the top of every page in a document?",
          options: ["Footer", "Header", "Watermark", "Title"],
          correctAnswer: 1
        },
        {
          question: "What is the file extension for a Word template?",
          options: [".docx", ".dotx", ".tmpx", ".wdtx"],
          correctAnswer: 1
        }
      ]
    },
    // Add more content for other Microsoft Office modules
  },
  ai: {
    // Content for AI modules
  },
  mail: {
    // Content for Email & Meetings modules
  }
};
