import React from 'react';

const SectionTitle = ({title, desc}) => {
    return (
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
          <p className="text-lg text-muted-foreground mt-4">
            {desc}
          </p>
        </div>
    );
};

export default SectionTitle;