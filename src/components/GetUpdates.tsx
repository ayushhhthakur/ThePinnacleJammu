// GetUpdates.js
import '../styles/GlobalStyles.css'
import '../styles/GetUpdates.css'
import { webPages } from '../data/Updates.ts'

const GetUpdates = () => {

  return (
    <div className="updates">
      <h2>Featured Web Pages</h2>
      <ul>
        {webPages.map((page, index) => (
          <li key={index}>
            <h3>{page.title}</h3>
            <p>{page.description}</p>
            <a href={page.link}>Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetUpdates;
