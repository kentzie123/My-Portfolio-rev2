let skills = 
[

    {
        title: "HTML",
        exp:"Advanced",
        progress: "90%",
        knowledges: ["HTML Structuring","Responsive Design","Semantics","Forms"],
        bgColor: "rgb(241, 107, 58)",
        SvgIcon: ()=> (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>HTML5 Logo Badge</title>
                <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"></path>
                <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"></path>
                <path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"></path>
                <path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"></path>
            </svg>
        )
    },
    {
        title: "CSS",
        exp:"Advanced",
        progress: "90%",
        knowledges: ["Responsive Layouts","Flexbox & Grid","Styling & Theming","Transitions","Animations"],
        bgColor: "rgb(76, 76, 236)",
        SvgIcon: ()=> (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#264de4" d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"/>
                <path fill="#2965f1" d="M405.388 431.408l35.148-393.73H256v435.146z"/>
                <path fill="#ebebeb" d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"/>
                <path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"/>
            </svg>
        )
    },
    {
        title: "JS",
        exp:"Proficient",
        progress: "80%",
        knowledges: ["Core Javascript","DOM Manipulation","AJAX (JQUERY) and Fetch API","Event Handling"],
        bgColor: "rgb(241, 241, 62)",
        SvgIcon: ()=> (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e9ca32"/><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ffde25"/><g fill="#fff"><path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z"/></g></svg>
        )
    },
    {
        title: "React JS",
        exp:"Proficient",
        progress: "80%",
        knowledges: ["Components & Props", "State Management", "React Hooks", "React Router", "Context API", "JSX & Virtual DOM"],
        bgColor: "rgb(58,80,125)",
        SvgIcon: ()=> (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="160" height="160" viewBox="0 0 80 80">
                <path fill="#8bb7f0" d="M46.5,40c0,3.593-2.907,6.5-6.5,6.5s-6.5-2.907-6.5-6.5s2.907-6.5,6.5-6.5S46.5,36.407,46.5,40z"></path><path fill="#4e7ab5" d="M40,47c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S43.859,47,40,47z M40,34c-3.309,0-6,2.691-6,6 s2.691,6,6,6s6-2.691,6-6S43.309,34,40,34z"></path><g><path fill="#8bb7f0" d="M24.474,75.503c-1.711,0-3.269-0.392-4.632-1.164c-2.28-1.293-3.856-3.521-4.686-6.62 c-0.965-3.607-0.85-8.398,0.332-13.878C5.956,50.562,0.5,45.531,0.5,40c0-5.532,5.455-10.562,14.987-13.84 c-1.182-5.481-1.298-10.272-0.333-13.879c0.83-3.1,2.406-5.328,4.685-6.62c1.362-0.772,2.921-1.164,4.632-1.164 c4.388,0,9.891,2.73,15.531,7.698c5.64-4.963,11.141-7.691,15.524-7.691c1.711,0,3.269,0.392,4.632,1.164 c2.277,1.291,3.854,3.515,4.684,6.611c0.966,3.606,0.85,8.398-0.333,13.88C74.043,29.437,79.5,34.468,79.5,40 s-5.457,10.563-14.991,13.842c1.182,5.481,1.298,10.272,0.332,13.878c-0.83,3.097-2.405,5.321-4.68,6.612 c-1.364,0.772-2.923,1.164-4.633,1.164c-4.386,0-9.889-2.728-15.527-7.689C34.361,72.774,28.859,75.503,24.474,75.503z M19.337,55.006c-0.991,4.717-1.102,8.747-0.316,11.679c0.542,2.026,1.481,3.431,2.794,4.175c0.753,0.427,1.648,0.644,2.659,0.644 c3.394,0,7.862-2.282,12.621-6.437c-2.385-2.402-4.713-5.121-6.928-8.091C26.336,56.56,22.696,55.898,19.337,55.006z M42.906,65.065c4.758,4.151,9.227,6.431,12.621,6.432c1.011,0,1.906-0.217,2.661-0.644c1.309-0.742,2.246-2.144,2.787-4.167 c0.786-2.934,0.676-6.963-0.315-11.679c-3.362,0.892-7.003,1.554-10.833,1.97C47.613,59.947,45.288,62.665,42.906,65.065z M35.566,57.393c1.452,1.776,2.938,3.433,4.434,4.94c1.492-1.506,2.979-3.163,4.43-4.94C42.939,57.464,41.454,57.5,40,57.5 C38.545,57.5,37.059,57.464,35.566,57.393z M32.349,53.179C34.844,53.392,37.417,53.5,40,53.5c2.585,0,5.155-0.108,7.646-0.32 c1.486-2.084,2.903-4.268,4.214-6.495c1.268-2.155,2.461-4.404,3.547-6.686c-1.083-2.276-2.275-4.524-3.546-6.684 c-1.308-2.222-2.725-4.406-4.215-6.495C45.157,26.608,42.587,26.5,40,26.5c-2.588,0-5.159,0.108-7.647,0.321 c-1.49,2.086-2.909,4.27-4.219,6.495c-1.27,2.159-2.462,4.407-3.546,6.686c1.082,2.274,2.274,4.522,3.545,6.684 C29.437,48.901,30.854,51.084,32.349,53.179z M57.491,44.779c-0.706,1.346-1.438,2.666-2.185,3.934 c-0.753,1.282-1.554,2.568-2.386,3.836c2.374-0.366,4.645-0.835,6.771-1.4C59.101,49.1,58.362,46.963,57.491,44.779z M20.304,51.148c2.127,0.564,4.397,1.034,6.768,1.4c-0.837-1.276-1.638-2.563-2.386-3.835c-0.745-1.267-1.478-2.585-2.183-3.931 C21.636,46.956,20.898,49.091,20.304,51.148z M59.816,40c1.528,3.391,2.773,6.743,3.708,9.977C70.926,47.373,75.5,43.574,75.5,40 s-4.574-7.373-11.976-9.977C62.591,33.257,61.345,36.609,59.816,40z M16.472,30.025C9.073,32.628,4.5,36.427,4.5,40 c0,3.574,4.573,7.373,11.974,9.976c0.934-3.235,2.179-6.587,3.705-9.974C18.652,36.614,17.407,33.262,16.472,30.025z M20.303,28.852c0.594,2.054,1.332,4.19,2.2,6.368c0.704-1.342,1.436-2.661,2.184-3.932c0.752-1.279,1.553-2.565,2.388-3.836 C24.701,27.817,22.431,28.287,20.303,28.852z M52.922,27.451c0.837,1.277,1.638,2.563,2.386,3.837 c0.746,1.267,1.479,2.586,2.185,3.932c0.869-2.177,1.607-4.313,2.201-6.369C57.564,28.286,55.294,27.816,52.922,27.451z M24.471,8.497c-1.011,0-1.905,0.216-2.657,0.644c-1.312,0.744-2.252,2.149-2.795,4.175c-0.785,2.935-0.675,6.964,0.317,11.679 c3.36-0.892,7.002-1.555,10.834-1.971c2.217-2.971,4.545-5.688,6.927-8.088C32.337,10.779,27.866,8.497,24.471,8.497z M49.828,23.023c3.83,0.416,7.471,1.078,10.833,1.97c0.992-4.716,1.103-8.746,0.316-11.68c-0.542-2.022-1.48-3.424-2.79-4.166 c-0.754-0.427-1.649-0.644-2.661-0.644c-3.393,0-7.86,2.281-12.619,6.433C45.287,17.335,47.613,20.053,49.828,23.023z M40,22.5 c1.454,0,2.939,0.036,4.431,0.107c-1.45-1.774-2.936-3.43-4.429-4.938c-1.497,1.51-2.982,3.166-4.432,4.938 C37.061,22.536,38.546,22.5,40,22.5z"></path><path fill="#4e7ab5" d="M24.471,4.997c4.494,0,9.996,2.91,15.532,7.867c5.535-4.953,11.034-7.86,15.524-7.86 c1.623,0,3.099,0.37,4.386,1.099c2.156,1.222,3.652,3.343,4.446,6.306c1.077,3.917,0.851,8.74-0.434,14.08 C73.147,29.57,79,34.431,79,40s-5.853,10.43-15.076,13.512c1.341,5.773,1.566,10.726,0.434,14.079 c-0.794,2.962-2.289,5.084-4.443,6.306C58.626,74.627,57.455,75,55.833,75c-0.001,0-0.416,0-0.417,0 c-4.492,0-9.882-2.91-15.416-7.861c-5.535,4.956-11.035,7.864-15.527,7.864c-1.623,0-3.099-0.37-4.386-1.099 c-2.158-1.225-3.655-3.349-4.448-6.314c-1.19-3.717-0.95-8.603,0.434-14.079C6.852,50.429,1,45.569,1,40 c0-5.568,5.852-10.429,15.072-13.511C15.385,23.43,14.946,20.59,14.931,18c-0.012-2.046,0.267-3.949,0.707-5.59 c0.794-2.966,2.29-5.09,4.448-6.314C21.372,5.366,22.848,4.997,24.471,4.997 M18.958,25.614c3.477-0.955,7.338-1.677,11.483-2.117 c2.382-3.21,4.875-6.096,7.386-8.584c-4.872-4.346-9.616-6.917-13.356-6.917c-1.099,0-2.075,0.238-2.904,0.709 c-1.433,0.813-2.452,2.32-3.031,4.481C17.678,16.388,17.873,20.716,18.958,25.614 M61.039,25.613 c1.085-4.898,1.28-9.227,0.422-12.429c-0.578-2.157-1.597-3.661-3.027-4.472c-0.83-0.471-1.809-0.709-2.907-0.709 c-3.737,0-8.478,2.568-13.349,6.91c2.51,2.488,5,5.374,7.38,8.583C53.701,23.936,57.562,24.658,61.039,25.613 M34.477,23.166 c1.802-0.107,3.609-0.2,5.488-0.2c1.879,0,3.755,0.094,5.557,0.2c-1.808-2.279-3.664-4.361-5.521-6.204 C38.144,18.805,36.287,20.887,34.477,23.166 M40,54c2.761,0,5.404-0.121,7.918-0.342c1.519-2.117,2.988-4.365,4.372-6.719 c1.353-2.299,2.577-4.626,3.67-6.939c-1.093-2.313-2.317-4.639-3.669-6.937c-1.385-2.355-2.853-4.602-4.373-6.719 C45.405,26.121,42.762,26,40,26s-5.406,0.121-7.92,0.343c-1.521,2.117-2.991,4.365-4.376,6.719 c-1.352,2.299-2.576,4.626-3.669,6.939c1.093,2.313,2.316,4.639,3.668,6.937c1.385,2.354,2.854,4.602,4.374,6.719 C34.592,53.879,37.237,54,40,54 M57.546,36.413c1.125-2.709,2.056-5.369,2.766-7.913c-2.553-0.702-5.373-1.282-8.428-1.707 c1.028,1.527,2.029,3.11,2.992,4.748C55.83,33.16,56.717,34.788,57.546,36.413 M22.449,36.414c0.828-1.625,1.716-3.253,2.668-4.873 c0.964-1.638,1.966-3.22,2.995-4.747c-3.055,0.424-5.875,1.005-8.428,1.707C20.394,31.045,21.325,33.704,22.449,36.414 M63.188,50.622C71.264,47.886,76,43.866,76,40s-4.736-7.886-12.812-10.622c-0.953,3.405-2.269,6.983-3.92,10.621 C60.919,43.638,62.235,47.216,63.188,50.622 M16.81,50.621c0.952-3.404,2.267-6.982,3.918-10.619 c-1.651-3.638-2.967-7.217-3.919-10.622C8.734,32.116,4,36.135,4,40C4,43.866,8.735,47.885,16.81,50.621 M51.884,53.207 c3.055-0.424,5.875-1.004,8.428-1.707c-0.711-2.544-1.642-5.204-2.766-7.914c-0.829,1.625-1.717,3.253-2.67,4.873 C53.913,50.097,52.912,51.68,51.884,53.207 M28.109,53.206c-1.028-1.527-2.029-3.109-2.993-4.746 c-0.952-1.619-1.839-3.246-2.667-4.87c-1.124,2.708-2.054,5.367-2.764,7.91C22.237,52.201,25.056,52.781,28.109,53.206 M24.474,72.003c3.739,0,8.481-2.57,13.352-6.914c-2.513-2.489-5.005-5.376-7.388-8.587c-4.143-0.439-8.002-1.161-11.478-2.116 c-1.084,4.898-1.279,9.226-0.422,12.428c0.578,2.16,1.598,3.667,3.03,4.48C22.396,71.765,23.375,72.003,24.474,72.003 M55.527,71.997L55.527,71.997c1.099,0,2.076-0.238,2.907-0.709c1.43-0.811,2.447-2.315,3.024-4.473 c0.858-3.203,0.663-7.531-0.421-12.428c-3.477,0.955-7.337,1.677-11.481,2.116c-2.38,3.21-4.871,6.096-7.381,8.585 C47.046,69.428,51.788,71.996,55.527,71.997 M40,63.04c1.857-1.844,3.713-3.927,5.522-6.206c-1.801,0.107-3.559,0.333-5.439,0.333 c-1.881,0-3.807-0.226-5.609-0.333C36.284,59.114,38.142,61.197,40,63.04 M24.116,4.072c-1.799,0-3.085,0.338-4.523,1.153 c-2.399,1.361-4.055,3.691-4.921,6.926c-0.96,3.587-0.877,8.302,0.236,13.681C5.419,29.189,0,34.325,0,40 c0,5.676,5.42,10.811,14.909,14.168c-1.113,5.379-1.196,10.094-0.235,13.681c0.865,3.233,2.52,5.563,4.921,6.926 c1.44,0.816,3.17,1.163,4.968,1.163c4.487,0,9.753-2.535,15.438-7.466c5.684,4.926,11.039,7.524,15.525,7.525 c1.799,0,3.441-0.413,4.881-1.229c2.397-1.359,4.051-3.686,4.916-6.917c0.961-3.588,0.878-8.303-0.235-13.681 C74.579,50.812,80,45.676,80,40s-5.42-10.812-14.911-14.169c1.114-5.38,1.196-10.095,0.235-13.682 c-0.866-3.231-2.521-5.558-4.919-6.917c-1.439-0.815-3.081-1.229-4.879-1.229c-4.485,0-9.839,2.599-15.524,7.527 c-5.686-4.932-11.066-7.461-15.554-7.461L24.116,4.072z M19.72,24.377c-0.462-2.324-0.772-4.502-0.789-6.412 c-0.015-1.72,0.221-3.217,0.57-4.521c0.507-1.892,1.368-3.194,2.559-3.87c0.676-0.384,1.5-0.644,2.423-0.644 c3.181,0,7.367,2.178,11.883,6.034c-2.221,2.273-4.392,4.819-6.466,7.585C26.315,22.949,22.897,23.562,19.72,24.377L19.72,24.377z M43.638,14.966c4.515-3.853,8.711-5.963,11.888-5.963c0.924,0,1.737,0.195,2.414,0.579c1.189,0.674,2.049,1.973,2.555,3.861 c0.874,2.818,0.761,6.564-0.218,10.933c-3.177-0.814-6.594-1.428-10.178-1.826C48.026,19.785,45.857,17.239,43.638,14.966 L43.638,14.966z M36.673,22.06c1.096-1.3,2.209-2.53,3.328-3.678c1.119,1.148,2.231,2.378,3.326,3.678 C42.208,22.02,41.095,22,40,22S37.793,22.02,36.673,22.06L36.673,22.06z M32.625,27.3c2.405-0.199,4.883-0.341,7.375-0.341 c2.491,0,4.969,0.142,7.373,0.341c1.432,2.019,2.796,4.126,4.056,6.269c1.222,2.078,2.373,4.239,3.423,6.43 c-1.051,2.192-2.202,4.354-3.424,6.432c-1.261,2.144-2.624,4.25-4.056,6.269c-2.403,0.199-4.881,0.466-7.372,0.466 c-2.493,0-4.972-0.268-7.378-0.467c-1.433-2.018-2.797-4.125-4.058-6.269c-1.222-2.077-2.372-4.238-3.422-6.43 c1.05-2.192,2.201-4.354,3.423-6.432C29.827,31.425,31.192,29.318,32.625,27.3L32.625,27.3z M57.422,34.024 c-0.549-1.018-1.112-2.018-1.683-2.99c-0.57-0.969-1.167-1.942-1.785-2.909c1.774,0.302,3.485,0.663,5.114,1.08 C58.601,30.771,58.05,32.383,57.422,34.024L57.422,34.024z M20.928,29.205c1.629-0.417,3.34-0.778,5.114-1.08 c-0.619,0.967-1.216,1.94-1.786,2.908c-0.571,0.972-1.134,1.972-1.683,2.99C21.945,32.384,21.395,30.772,20.928,29.205 L20.928,29.205z M60.365,39.999c1.415-3.162,2.587-6.292,3.49-9.326C70.758,33.192,75,36.721,75,40s-4.242,6.808-11.145,9.327 C62.951,46.292,61.78,43.161,60.365,39.999L60.365,39.999z M16.142,49.326C9.241,46.807,5,43.278,5,40s4.241-6.807,11.141-9.326 c0.903,3.035,2.074,6.165,3.489,9.327C18.216,43.162,17.045,46.292,16.142,49.326L16.142,49.326z M53.953,51.876 c0.618-0.968,1.216-1.941,1.785-2.909c0.572-0.972,1.135-1.973,1.684-2.991c0.628,1.641,1.178,3.254,1.646,4.821 C57.438,51.212,55.727,51.574,53.953,51.876L53.953,51.876z M20.929,50.795c0.467-1.566,1.017-3.177,1.644-4.816 c0.548,1.017,1.111,2.017,1.682,2.988c0.569,0.968,1.166,1.94,1.785,2.908C24.267,51.572,22.557,51.211,20.929,50.795 L20.929,50.795z M24.474,71.003c-0.924,0-1.736-0.195-2.413-0.579c-1.19-0.676-2.051-1.977-2.557-3.869 c-0.831-2.845-0.737-6.592,0.218-10.933c3.176,0.814,6.592,1.428,10.175,1.826c2.075,2.766,4.246,5.313,6.468,7.588 C31.85,68.893,27.653,71.004,24.474,71.003L24.474,71.003L24.474,71.003z M50.098,57.45c3.584-0.399,7.001-1.012,10.178-1.826 c1.105,4.74,1.192,8.518,0.217,10.932c-0.505,1.889-1.364,3.188-2.552,3.861c-0.678,0.384-1.49,0.579-2.413,0.579v1l-0.001-1 c-3.18,0-7.377-2.11-11.891-5.961C45.856,62.762,48.025,60.216,50.098,57.45L50.098,57.45z M40,61.62 c-1.12-1.148-2.234-2.379-3.33-3.68C37.79,57.98,38.904,58,40,58c1.095,0,2.208-0.02,3.327-0.06 C42.232,59.241,41.119,60.472,40,61.62L40,61.62z"></path></g>
            </svg>
        )
    },
    {
        title: "Bootstrap",
        exp:"Intermediate",
        progress: "60%",
        knowledges: ["Grid System", "Responsive Design", "Flexbox & Utilities", "Bootstrap Components", "Theming & Customization"],
        bgColor: "rgb(109, 50, 225)",
        SvgIcon: ()=> (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="240" height="240" viewBox="0 0 48 48">
                <path fill="#7c4dff" d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"></path><path fill="#fff" d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"></path>
            </svg>
        )
    },
    {
        title: "PHP",
        exp:"Intermediate",
        progress: "60%",
        knowledges: ["PHP Fundamentals","Server-Side Scripting","Database Integration","Forms & Data Handling","Session & Cookie"],
        bgColor: "#2e375c",
        SvgIcon: ()=> (
            <svg viewBox="0 0 256 134" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fill-rule="evenodd"><ellipse fill="#8993BE" cx="128" cy="66.63" rx="128" ry="66.63"/><path d="M35.945 106.082l14.028-71.014H82.41c14.027.877 21.041 7.89 21.041 20.165 0 21.041-16.657 33.315-31.562 32.438H56.11l-3.507 18.411H35.945zm23.671-31.561L64 48.219h11.397c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.52zM100.192 87.671l14.027-71.013h16.658l-3.507 18.41h15.78c14.028.877 19.288 7.89 17.535 16.658l-6.137 35.945h-17.534l6.137-32.438c.876-4.384.876-7.014-5.26-7.014H124.74l-7.89 39.452h-16.658zM153.425 106.082l14.027-71.014h32.438c14.028.877 21.042 7.89 21.042 20.165 0 21.041-16.658 33.315-31.562 32.438h-15.781l-3.507 18.411h-16.657zm23.67-31.561l4.384-26.302h11.398c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.521z" fill="#232531"/></g></svg>
        )
    },
    {
        title: "SQL",
        exp:"Novice",
        progress: "45%",
        knowledges: ["Database Structuring","SQL Querying"],
        bgColor: "#03404e",
        SvgIcon: ()=> (
            <svg viewBox="-7.938 -7.939 72.731 49.537" xmlns="http://www.w3.org/2000/svg"><g stroke-width=".187"><path d="m21.72 24.79c-1.143 6.217-2.65 10.74-4.521 13.55-1.458 2.172-3.055 3.258-4.794 3.258-.464 0-1.035-.14-1.714-.418v-1.5c.331.05.72.075 1.167.075.811 0 1.465-.224 1.963-.673.596-.547.894-1.161.894-1.842 0-.465-.233-1.42-.696-2.864l-3.08-9.59h2.757l2.21 7.173c.497 1.628.704 2.765.621 3.413 1.21-3.238 2.054-6.766 2.534-10.58h2.658m-12.17 12.4h-2.806c-.099-4.75-.372-9.215-.82-13.4h-.023l-4.273 13.4h-2.138l-4.247-13.4h-.025c-.315 4.018-.513 8.483-.596 13.4h-2.559c.165-5.978.58-11.58 1.241-16.81h3.478l4.049 12.35h.025l4.074-12.35h3.328c.728 6.126 1.159 11.73 1.29 16.81" fill="#00758f"/><path d="m59.08 37.19h-7.973v-16.81h2.683v14.74h5.29v2.068m-20.05-3.363c-.68-1.096-1.019-2.854-1.019-5.279 0-4.233 1.284-6.351 3.85-6.351 1.342 0 2.327.507 2.956 1.519.678 1.096 1.018 2.84 1.018 5.231 0 4.267-1.284 6.402-3.85 6.402-1.341 0-2.327-.506-2.955-1.52m9.985 3.768-3.082-1.524c.274-.226.535-.47.77-.75 1.31-1.543 1.964-3.826 1.964-6.849 0-5.562-2.178-8.344-6.533-8.344-2.136 0-3.801.705-4.993 2.118-1.31 1.544-1.963 3.82-1.963 6.824 0 2.955.58 5.123 1.738 6.5 1.056 1.245 2.653 1.868 4.792 1.868.798 0 1.53-.098 2.195-.295l4.013 2.342 1.094-1.89m-15-5.065c0 1.426-.522 2.596-1.564 3.512-1.042.911-2.443 1.369-4.196 1.369-1.64 0-3.23-.527-4.77-1.57l.721-1.444c1.325.664 2.524.995 3.6.995 1.01 0 1.8-.225 2.372-.67.57-.449.913-1.074.913-1.867 0-.998-.695-1.851-1.968-2.567a306.291 306.291 0 0 1 -3.526-1.998c-1.273-.932-1.912-1.931-1.912-3.577 0-1.362.476-2.463 1.427-3.3.953-.84 2.183-1.26 3.689-1.26 1.557 0 2.972.417 4.247 1.248l-.648 1.443c-1.09-.464-2.166-.697-3.227-.697-.86 0-1.524.208-1.986.624-.465.413-.752.945-.752 1.593 0 .996.71 1.86 2.019 2.59 1.19.647 3.599 2.024 3.599 2.024 1.31.93 1.963 1.921 1.963 3.554m26.979 4.658h.445v-1.71h.581v-.35h-1.63v.35h.604zm3.383 0h.419v-2.06h-.63l-.513 1.404-.559-1.404h-.607v2.06h.397v-1.568h.022l.585 1.568h.302l.584-1.568z" fill="#f29111"/><path d="m36.78-7.929c-.709-.01-1.327.257-1.646 1.042-.547 1.321.81 2.62 1.277 3.291.344.467.79.996 1.032 1.523.142.345.183.712.325 1.077.324.894.627 1.889 1.053 2.723.222.427.465.874.749 1.258.163.225.446.325.507.692-.283.405-.305 1.015-.466 1.524-.73 2.295-.446 5.139.587 6.825.324.507 1.094 1.625 2.128 1.198.912-.365.71-1.523.972-2.538.061-.246.02-.407.142-.57v.042c.283.568.568 1.115.831 1.686.629.994 1.722 2.03 2.634 2.72.485.367.87.996 1.478 1.22v-.062h-.04c-.122-.182-.304-.264-.466-.405-.365-.366-.769-.813-1.053-1.22-.85-1.136-1.601-2.396-2.268-3.696-.325-.631-.608-1.321-.872-1.95-.121-.243-.121-.61-.324-.731-.305.446-.75.833-.972 1.379-.385.875-.425 1.951-.568 3.068-.08.021-.04 0-.08.04-.648-.162-.871-.832-1.115-1.4-.608-1.443-.71-3.76-.182-5.424.14-.426.75-1.766.506-2.173-.122-.388-.527-.61-.75-.915a8.054 8.054 0 0 1 -.728-1.3c-.486-1.137-.73-2.397-1.256-3.534-.243-.53-.67-1.077-1.013-1.564-.386-.549-.81-.935-1.115-1.584-.1-.224-.242-.59-.08-.833.039-.163.121-.224.284-.265.261-.223 1.012.06 1.275.182.75.304 1.378.59 2.005 1.015.283.204.587.59.952.692h.426c.648.142 1.378.04 1.986.223 1.073.345 2.045.853 2.917 1.401a18.007 18.007 0 0 1 6.319 6.947c.244.467.346.894.568 1.38.426.998.953 2.013 1.378 2.987.425.955.831 1.93 1.44 2.722.302.426 1.518.65 2.065.873.405.182 1.033.345 1.398.568.69.426 1.376.914 2.025 1.382.324.244 1.336.751 1.397 1.158-1.62-.04-2.876.122-3.93.57-.303.121-.789.121-.83.507.163.162.182.426.325.65.243.407.667.954 1.053 1.24.426.325.851.649 1.297.933.79.49 1.681.773 2.45 1.26.447.284.892.65 1.338.955.222.162.363.427.648.527v-.062c-.143-.182-.183-.446-.324-.65-.202-.202-.405-.385-.608-.588a9.674 9.674 0 0 0 -2.106-2.05c-.649-.449-2.068-1.059-2.33-1.808l-.041-.041c.445-.041.973-.204 1.399-.327.687-.183 1.316-.142 2.025-.324.324-.082.648-.184.974-.283v-.185c-.367-.364-.629-.853-1.013-1.198-1.032-.893-2.168-1.766-3.343-2.499-.63-.406-1.44-.669-2.108-1.015-.242-.122-.647-.182-.79-.386-.364-.447-.568-1.035-.83-1.564a50.647 50.647 0 0 1 -1.661-3.535c-.365-.792-.588-1.583-1.033-2.315-2.088-3.454-4.356-5.545-7.84-7.597-.75-.427-1.641-.61-2.592-.833-.508-.021-1.013-.06-1.52-.08-.325-.144-.65-.53-.933-.713-.722-.457-2.156-1.247-3.337-1.265zm4.998 5.021c-.344 0-.586.042-.83.102v.04h.039c.163.325.447.55.648.834.163.325.305.649.467.974l.04-.04c.285-.203.427-.528.427-1.016-.123-.143-.142-.284-.244-.427-.121-.202-.385-.304-.547-.467z" fill="#00758f"/></g></svg>
        )
        
    },
    {
        title: "Power  Apps",
        exp:"Advanced",
        progress: "90%",
        knowledges: [
            "Canvas Apps & Model-driven Apps",
            "Form Customization",
            "Power Automate Integration",
            "Dataverse & SharePoint",
            "Responsive Design & Layouts"
        ],
        bgColor: "rgb(134,42,140)",
        SvgIcon: ()=> (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="240" height="240" viewBox="0 0 48 48">
                <linearGradient id="V-oMXmZmTVsp9erTs5L2ta_OU2ddOKw840K_gr1" x1="16.738" x2="24.268" y1="2.659" y2="45.366" gradientUnits="userSpaceOnUse"><stop offset=".003" stop-color="#a33094"></stop><stop offset=".998" stop-color="#6d246b"></stop></linearGradient><path fill="url(#V-oMXmZmTVsp9erTs5L2ta_OU2ddOKw840K_gr1)" d="M20.5,46c-0.567,0-1.107-0.24-1.487-0.662L1.917,26.342c-0.58-0.645-0.898-1.477-0.898-2.343	s0.319-1.697,0.899-2.342L19.013,2.662c0.759-0.844,2.215-0.844,2.974,0l17.097,18.996c0,0,0,0,0,0.001c1.2,1.334,1.2,3.348,0,4.682	L21.987,45.338C21.607,45.76,21.067,46,20.5,46z"></path><path d="M39.98,24c0,0.84-0.3,1.68-0.9,2.34L23.66,43.49l-0.34,0.37l-6.05-6.72c-1.03-1.15-1.03-2.87,0-4.02	l7.37-8.19c0.48-0.53,0.48-1.33,0-1.86l-7.37-8.19c-1.03-1.15-1.03-2.87,0-4.02l6.05-6.72l0.34,0.37l15.42,17.15	C39.68,22.32,39.98,23.16,39.98,24z" opacity=".05"></path><path d="M39.98,24c0,0.84-0.3,1.68-0.9,2.34L23.66,43.49l-6.02-6.69c-0.86-0.95-0.86-2.39,0-3.34l7.37-8.19	c0.65-0.73,0.65-1.81,0-2.54l-7.37-8.19c-0.86-0.95-0.86-2.39,0-3.34l6.02-6.69l15.42,17.15C39.68,22.32,39.98,23.16,39.98,24z" opacity=".05"></path><linearGradient id="V-oMXmZmTVsp9erTs5L2tb_OU2ddOKw840K_gr2" x1="27.385" x2="34.916" y1="2.013" y2="44.72" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e288c5"></stop><stop offset=".998" stop-color="#d76dbb"></stop></linearGradient><path fill="url(#V-oMXmZmTVsp9erTs5L2tb_OU2ddOKw840K_gr2)" d="M27.482,46L27.482,46	c-0.567,0-1.107-0.24-1.487-0.662l-7.984-8.871c-0.685-0.761-0.684-1.915,0-2.676l7.371-8.189c0.822-0.913,0.822-2.29,0-3.203	l-7.371-8.189c-0.684-0.761-0.685-1.915,0-2.676l7.984-8.871c0.759-0.844,2.215-0.844,2.974,0l17.097,18.996c0,0,0,0,0,0.001	c1.2,1.334,1.2,3.347,0.001,4.682L28.968,45.338C28.589,45.76,28.049,46,27.482,46z"></path><linearGradient id="V-oMXmZmTVsp9erTs5L2tc_OU2ddOKw840K_gr3" x1="36.226" x2="39.762" y1="13.984" y2="34.042" gradientUnits="userSpaceOnUse"><stop offset=".006" stop-color="#e9a0cb"></stop><stop offset=".998" stop-color="#e48dc7"></stop></linearGradient><path fill="url(#V-oMXmZmTVsp9erTs5L2tc_OU2ddOKw840K_gr3)" d="M37.991,34.323	c-0.567,0-1.107-0.24-1.486-0.662l-6.588-7.319c-0.581-0.646-0.9-1.479-0.899-2.346c0-0.865,0.32-1.695,0.899-2.339l6.587-7.318	c0.758-0.844,2.215-0.844,2.973,0l6.588,7.319c1.2,1.336,1.2,3.348,0.001,4.683l-6.589,7.32	C39.099,34.083,38.558,34.323,37.991,34.323z"></path>
            </svg>
        )
    },
    {
        title: "Power Automate",
        exp:"Intermediate",
        progress: "60%",
        knowledges: [
            "Flow Creation & Automation",
            "Triggers & Actions",
            "Approval Workflows",
            "PowerApps Integration",
            "Error Handling & Debugging",
            "Expressions & Dynamic Content"
        ],
        bgColor: "rgb(17,72,183)",
        SvgIcon: ()=> (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="240" height="240" viewBox="0 0 48 48">
                <linearGradient id="1~WE0Lz3GgLZUex~1j_nwa_kTTt25v6Drpd_gr1" x1="10.281" x2="24.742" y1="1.322" y2="16.996" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#196de5"></stop><stop offset="1" stop-color="#1351c8"></stop></linearGradient><path fill="url(#1~WE0Lz3GgLZUex~1j_nwa_kTTt25v6Drpd_gr1)" d="M4.662,6.941c-0.001,0-0.003,0-0.004,0c-1.42,0-2.179,1.675-1.241,2.743L16,24L30.869,7.159 c-0.241-0.101-0.501-0.16-0.768-0.161L4.662,6.941z"></path><linearGradient id="1~WE0Lz3GgLZUex~1j_nwb_kTTt25v6Drpd_gr2" x1="17.184" x2="27.74" y1="23.368" y2="36.213" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4d9fff"></stop><stop offset="1" stop-color="#1667eb"></stop></linearGradient><path fill="url(#1~WE0Lz3GgLZUex~1j_nwb_kTTt25v6Drpd_gr2)" d="M38.056,14.996l-6.46-7.322c-0.202-0.229-0.452-0.401-0.727-0.516L16,24L3.457,38.215 c-0.951,1.078-0.192,2.769,1.24,2.782l10.785-0.007L38.056,14.996z"></path><linearGradient id="1~WE0Lz3GgLZUex~1j_nwc_kTTt25v6Drpd_gr3" x1="27.324" x2="33.437" y1="27.209" y2="37.448" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#70bcfd"></stop><stop offset="1" stop-color="#4a9ff9"></stop></linearGradient><path fill="url(#1~WE0Lz3GgLZUex~1j_nwc_kTTt25v6Drpd_gr3)" d="M44.217,21.982l-6.161-6.985L15.482,41l14.796-0.01c0.506-0.046,0.98-0.273,1.319-0.658 l12.62-14.308C45.236,24.87,45.236,23.137,44.217,21.982z"></path><path d="M16,24L30.869,7.159c-0.241-0.101-0.501-0.16-0.768-0.161l-0.423-0.001 L15.336,23.245L16,24z" opacity=".05"></path><path d="M15.669,23.624L16,24L30.869,7.159c-0.173-0.073-0.358-0.114-0.546-0.137 L15.669,23.624z" opacity=".07"></path>
            </svg>
        )
    },
    {
        title: "Power BI",
        exp:"Novice",
        progress: "45%",
        knowledges: [
            "Data Modeling",
            "DAX (Data Analysis Expressions)",
            "Data Visualization & Reports",
            "Dashboard Design",
            "Integration with Power Automate & Power Apps"
        ],
        bgColor: "rgb(207,163,47)",
        SvgIcon: ()=> (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="240" height="240" viewBox="0 0 48 48">
                <linearGradient id="zlT103XX9RAwCGfF9JpW0a_3sGOUDo9nJ4k_gr1" x1="32" x2="32" y1="3.947" y2="44.751" gradientUnits="userSpaceOnUse"><stop offset=".006" stop-color="#ebb112"></stop><stop offset="1" stop-color="#bb5c17"></stop></linearGradient><path fill="url(#zlT103XX9RAwCGfF9JpW0a_3sGOUDo9nJ4k_gr1)" d="M27,44h10c1.105,0,2-0.895,2-2V6c0-1.105-0.895-2-2-2H27c-1.105,0-2,0.895-2,2v36	C25,43.105,25.895,44,27,44z"></path><linearGradient id="zlT103XX9RAwCGfF9JpW0b_3sGOUDo9nJ4k_gr2" x1="22.089" x2="26.009" y1="13.14" y2="45.672" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed35d"></stop><stop offset=".281" stop-color="#f6c648"></stop><stop offset=".857" stop-color="#e3a513"></stop><stop offset=".989" stop-color="#de9d06"></stop></linearGradient><path fill="url(#zlT103XX9RAwCGfF9JpW0b_3sGOUDo9nJ4k_gr2)" d="M19,44h10c1.105,0,2-0.895,2-2V16c0-1.105-0.895-2-2-2H19c-1.105,0-2,0.895-2,2v26	C17,43.105,17.895,44,19,44z"></path><linearGradient id="zlT103XX9RAwCGfF9JpW0c_3sGOUDo9nJ4k_gr3" x1="9.803" x2="21.335" y1="22.781" y2="43.658" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd869"></stop><stop offset=".983" stop-color="#ffdf26"></stop></linearGradient><path fill="url(#zlT103XX9RAwCGfF9JpW0c_3sGOUDo9nJ4k_gr3)" d="M11,44h10c1.105,0,2-0.895,2-2V26c0-1.105-0.895-2-2-2H11c-1.105,0-2,0.895-2,2v16	C9,43.105,9.895,44,11,44z"></path>
            </svg>
        )
    },
    {
        title: "MongoDB",
        exp: "Novice",
        progress: "45%",
        knowledges: [
            "Document-Based Data Modeling",
            "CRUD Operations (Create, Read, Update, Delete)",
            "Using MongoDB Compass",
            "Basic Aggregation Pipelines",
            "Integrating with Node.js / Express"
        ],
        bgColor: "rgb(33, 69, 33)",
        SvgIcon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" height="2500" viewBox="8.738 -5.03622834 17.45992422 39.40619484" width="2500"><path d="m15.9.087.854 1.604c.192.296.4.558.645.802a22.406 22.406 0 0 1 2.004 2.266c1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12a12.7 12.7 0 0 1 -1.57 1.342c-.296 0-.436-.227-.558-.436a3.589 3.589 0 0 1 -.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z" fill="#599636"/><path d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z" fill="#6cac48"/><path d="m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1 -.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf"/></svg>
        )
    }
    

]


function Skills() {
    return (
        <section id="skills" className="backg-light-dark-2 px-lg-5 py-5">
            <div className="container m-0 m-lg-3">
                    <h5 className="theme-color fw-bold">SKILLS</h5>
                    <h4 className="fw-semibold text-color-1">Continuously expanding expertise and embracing new challenges along the way. 📚</h4>
                </div>
                <div className="container">
                    <div className="row justify-content-center gap-3 my-5">
                        {skills.map((skill, index) => {
                            const { bgColor: backgroundColor, SvgIcon: SVG, knowledges, progress } = skill;

                            return (
                                <div key={index} className="card col-3 skill-container g-0 overflow-hidden shadow-sm" style={{ maxWidth: "250px", minWidth: "225px", height: "250px" }}>
                                    <div className="skill-icon-container overflow-hidden d-flex justify-content-center align-items-center" style={{backgroundColor}}>
                                        <SVG />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{skill.title}</h5>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: progress, backgroundColor }}>{skill.exp}</div>
                                        </div>
                                    <div className="knowledges-info mt-3">
                                    <ul className="list-unstyled">
                                        {knowledges.map((knowledge, index) => {
                                            return (
                                                <li key={index} className=".text-color-2" style={{animationDelay:`${0.2 * index}s`}}>
                                                    {`- ${knowledge}`}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills;