import "./Homepage.scss";

const slides = [
    { color: "red", target: "#" },
    { color: "orange", target: "#" },
    { color: "yellow", target: "#" },
    { color: "green", target: "#" },
    { color: "blue", target: "#" },
    { color: "navy", target: "#" },
    { color: "purple", target: "#" },
];

export default function Homepage() {
    return (
        <div className="wrapper">
            <div className="slide_container">
                <ul className="slide_wrapper">
                    <div className="slide original">
                        {slides.map((s, i) => (
                            <li key={i}>
                                <div
                                    className="items"
                                    style={{ background: s.color }}
                                ></div>
                            </li>
                        ))}
                    </div>
                    <div className="slide clone">
                        {slides.map((s, i) => (
                            <li key={i}>
                                <div
                                    className="items"
                                    style={{ background: s.color }}
                                ></div>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    );
}
