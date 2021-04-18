const Circle = ({ dims, top, left, aos, delay, anchor }) => {
  return (
    <div
      className="circle"
      data-aos={aos}
      data-aos-delay={delay}
      data-aos-anchor-placement={anchor}
      style={{ height: dims, width: dims, top: top, left: left }}
    ></div>
  );
};

export default Circle;
