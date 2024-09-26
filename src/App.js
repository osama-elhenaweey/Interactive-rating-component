import { useState } from "react";

function App() {
    const [number, SetNumber] = useState(0);

    const [isSubmit, SetIsSubmit] = useState(true);

    function handleClick(e) {
        const clickedNumber = parseInt(e.target.textContent, 10);

        SetNumber(clickedNumber === number ? 0 : clickedNumber);
    }
    function handleSubmit() {
        if (!number) return;
        SetIsSubmit((s) => !s);
    }
    return (
        <>
            <Main
                onSubmit={handleSubmit}
                isSubmit={isSubmit}
                number={number}
                onRate={handleClick}
            />
        </>
    );
}
function Main({ isSubmit, onSubmit, number, onRate, active }) {
    return (
        <main className="main">
            {isSubmit && (
                <>
                    <Icon />
                    <HeadingInfo />
                    <Ratings onRate={onRate} active={active} number={number} />
                    <Button onSubmit={onSubmit} />
                </>
            )}
            {!isSubmit && (
                <>
                    <ThankYou number={number} />
                </>
            )}
        </main>
    );
}
function Icon() {
    return <img className="star-icon" src="images/icon-star.svg" alt="icon" />;
}
function HeadingInfo() {
    return (
        <>
            <h1 className="heading">How did we do?</h1>
            <p className="paragraph">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
            </p>
        </>
    );
}
function Ratings({ onRate, number }) {
    const arrNumbers = Array.from({ length: 5 }, (_, i) => i + 1);
    console.log(arrNumbers);
    return (
        <div className="ratings">
            {arrNumbers.map((rating) => (
                <Rating
                    key={rating}
                    onRate={onRate}
                    isActive={number === rating}
                >
                    {rating}
                </Rating>
            ))}
        </div>
    );
}
function Rating({ children, onRate, isActive }) {
    return (
        <span
            className={`rating ${isActive ? "active" : ""}`}
            onClick={(e) => {
                onRate(e);
            }}
        >
            {children}
        </span>
    );
}
function Button({ onSubmit }) {
    return (
        <button className="btn" onClick={onSubmit}>
            Submit
        </button>
    );
}
function ThankYou({ number }) {
    return (
        <div className="centered">
            <img
                className="image"
                src="images/illustration-thank-you.svg"
                alt="icon"
            />
            <span>You selected {number} out of 5</span>
            <h3 className="heading">Thank you!</h3>
            <p className="paragraph">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
            </p>
        </div>
    );
}
export default App;
