const Purpose = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="border border-gray-200 rounded-2xl p-8 md:p-12">
        {/* Header — same style as "Our Mission" above */}
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Why We Write
        </h2>
        <p className="text-muted-foreground text-sm mb-10 max-w-md">
          The values that guide every article we publish.
        </p>

        {/* 2-col list */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
          {[
            {
              icon: "📖",
              text: "To share knowledge and learn from each other",
            },
            { icon: "✨", text: "To inspire creativity and innovation" },
            { icon: "🤝", text: "To build a supportive community" },
            { icon: "🌐", text: "To explore diverse perspectives and ideas" },
            { icon: "💎", text: "To create lasting value for our readers" },
            { icon: "💬", text: "To contribute to meaningful conversations" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              {/* Icon box — matches the style of Learning/Exploration/Community above */}
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-sm">
                {item.icon}
              </div>
              <span className="text-sm text-muted-foreground leading-snug pt-1">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purpose;
