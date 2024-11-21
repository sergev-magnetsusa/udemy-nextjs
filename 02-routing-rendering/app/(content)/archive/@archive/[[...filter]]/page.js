import NewsList from '@/components/news/NewsList';
import {getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth} from '@/lib/news';
import Link from 'next/link';

const FilteredNewsPage = async ({params}) => {
  const {filter} = await params;

  const selectedYear = +filter?.[0];
  const selectedMonth = +filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>

  if (news && news.length > 0) {
    newsContent = <NewsList news={news}/>
  }

  console.log('-- selectedYear:', selectedYear);
  console.log('-- getAvailableNewsYears():', getAvailableNewsYears());
  console.log('getAvailableNewsYears().includes(selectedYear):', getAvailableNewsYears().includes(selectedYear));

  if (
    selectedYear && !getAvailableNewsYears().includes(selectedYear)
    // || (selectedMonth && !getAvailableNewsMonths().includes(selectedMonth))
  ) {
    throw new Error('Invalid filter.');
  }

  return <>
    <header id={'archive-header'}>
      <nav>
        <ul>
          {links.map((link, index) => {
            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
    {newsContent}
  </>
}

export default FilteredNewsPage