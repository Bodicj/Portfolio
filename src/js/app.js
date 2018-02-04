var skills = [
    { name: "HTML5", level: 8},
    { name: "CSS3", level: 7},
    { name: "JavaScript", level: 6},
    { name: "ReactJS", level: 3 },
    { name: "SASS", level: 8 },
    { name: "Git", level: 9 },
    { name: "Gulp", level: 8 },
];

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <Header />
                <About />
                <Skills data={skills} />
                <Contact />
                <Footer />
            </div>
        );
    }
});
var Header = React.createClass({
    render: function() {
        return (
            <div className="header-background">
                <header className="header">
                    <p className="logo">&lt;/&gt;</p>
                    <div className="navbar">
                        <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                        </ul>
                    </div>
                </header>
                <h1>bohdan ilba</h1>
                <p className="hd-paragraph">front-end developer</p>
            </div>
        )
   }
});
var About = React.createClass({
    render: function() {
        return (
            <div className="about" id="about">
                <h2>About</h2>
                <div className="a-cover">
                    <div className="a-text" id="goals">
                        <h3>Me</h3>
                        <p>
                            I am a goal-oriented guy who wants to achieve heights in the field of front-end development.
                            About myself I can say a little, I'm very hardworking guy, if I can not master the information
                            with a quick understanding, then I take it by force. Failures for me are not a reason to
                            despair, but an opportunity to understand their shortcomings and start working on myself.
                            From my future work I expected very interesting projects
                        </p>
                    </div>
                    <img src="img/a-avatar.png" alt="developer's_photo" />
                    <div className="a-text" id="dreams">
                        <h3>Dreams</h3>
                        <p>
                            Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec
                            phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo.
                            Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing
                            ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend.
                            Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut,
                            integer ut dignissim harum.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
});
var Skills = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    componentDidMount: function() {
        var i, j, sType;
        for(i = 0; i < document.getElementsByClassName('staticStars-input').length; i++){
            {
                sType = document.getElementsByClassName('staticStars-input')[i];
                for (j = 0; j < sType.childNodes.length; j = j + 2) {
                    if(parseInt(sType.childNodes[j].attributes[0].value.split('-')[1])+1 == parseInt(sType.attributes[1].value)){
                        sType.childNodes[j].disabled = false;
                        sType.childNodes[j].checked = true;
                        break
                    }
                }
            }
        }
    },
    render: function() {
        var data = this.props.data;
        var skillTemplate = data.map(function(item, index) {
            return (
                <div className="skill" key={index}>
                    <h3>{item.name}</h3>
                    <div className="s-level">
                        <div className="staticStars-input" refs="static" name={item.level}>
                            <input id="star-9" type="checkbox" name="reviewStars"  disabled/>
                            <label title="10" for="star-9"></label>

                            <input id="star-8" type="checkbox" name="reviewStars"  disabled/>
                            <label title="9" for="star-8"></label>

                            <input id="star-7" type="checkbox" name="reviewStars"  disabled/>
                            <label title="8" for="star-7"></label>

                            <input id="star-6" type="checkbox" name="reviewStars"  disabled/>
                            <label title="7" for="star-6"></label>

                            <input id="star-5" type="checkbox" name="reviewStars"  disabled/>
                            <label title="6" for="star-5"></label>

                            <input id="star-4" type="checkbox" name="reviewStars"  disabled/>
                            <label title="5" for="star-4"></label>

                            <input id="star-3" type="checkbox" name="reviewStars"  disabled/>
                            <label title="4" for="star-3"></label>

                            <input id="star-2" type="checkbox" name="reviewStars"  disabled/>
                            <label title="3" for="star-2"></label>

                            <input id="star-1" type="checkbox" name="reviewStars" disabled/>
                            <label title="2" for="star-1"></label>

                            <input id="star-0" type="checkbox" name="reviewStars" disabled/>
                            <label title="1" for="star-0"></label>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className="skills" id="skills">
                <h2>skills</h2>
                <div className="s-cover">
                    {skillTemplate}
                </div>
            </div>
        );
    }
});

var Contact = React.createClass({
    onInputChangeHandler: function(event) {
        console.log(event.target.value);
    },

    render: function() {
        return (
            <div className="contacts" id="contact">
                <h2>contacts</h2>
                <div className="c-cover">
                    <div className="c-company">
                        <h4>Phone number:</h4>
                        <a href="tel:+38061964425">+38(066)-196-44-25</a>
                        <h4>Email:</h4>
                        <a href="mailto:bohdan.ilba@gmail.com">bohdan.ilba@gmail.com</a>
                        <h4>Skype:</h4>
                        <a>bohdan.ilba@gmail.com</a>
                    </div>
                    <div className="c-dev">
                        <form id="cd-contacs">
                            <input onBlur={this.onInputChangeHandler.bind(this)} type="text" id="name" placeholder="Name" required/>
                            <input onBlur={this.onInputChangeHandler.bind(this)}  type="email" id="email" placeholder="Email" required/>
                            <textarea onChange={this.onInputChangeHandler.bind(this)} id="message-body" placeholder="Send a message"></textarea>
                        </form>
                        <button type="submit" form="cd-contacs" className="cd-submit">send</button>
                    </div>
                </div>
            </div>
        );
    }
});
/*I did not fully understand what you wanted to say in the fifth item of the assignment, so I add onBlur action,
 if you want to see full input value that you input, and onChange action, if you want to see every character that
 you input*/
var Footer = React.createClass({
   render: function() {
       return(
           <footer>
               <div className="f-contacts">
                    <div className="fc-item">
                        <h4>Mobile:</h4>
                        <a href="tel:+380666666666">+38(066)-196-44-25</a>
                    </div>
                    <div className="fc-item">
                        <h4>Email:</h4>
                        <a href="mailto:bohdan.ilba@gmail.com">bohdan.ilba@gmail.com</a>
                    </div>
                    <div className="fc-item">
                        <h4>Skype:</h4>
                        <a>bohdan.ilba@gmail.com</a>
                    </div>
               </div>
               <p className="logo">&lt;/&gt;</p>
           </footer>
       )
   }
});
ReactDOM.render(
    <App />,
    document.getElementById('root')
);