const MapSection = () => {
  return (
    <section id="location" className="py-12 md:py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Find Us</h2>
          <p className="text-muted-foreground mt-2">Lundegrend, Agder, Norway</p>
        </div>
        <div className="mx-auto max-w-5xl rounded-xl overflow-hidden shadow-soft border border-border">
          <div className="h-[300px] md:h-[360px] lg:h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20639.768534766087!2d7.585!3d58.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46380f2f3b8a9c5d%3A0x0!2sLundegrend%2C%20Agder%2C%20Norway!5e0!3m2!1sen!2sno!4v1700000000000!5m2!1sen!2sno"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Skog og Anleggsdrift Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;


