import urllib.request
import urllib.error
import urllib.parse
from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
import requests



# Create all_h1_tags as empty list
def get_title(soup):
	titles = []
	# Set all_h1_tags to all h1 tags of the soup
	for div in soup.findAll('h2',
								attrs = {'class':'entry-title'}):
				titles.append(div.text.strip())
	return titles


def get_date(soup):
	dates = []
	for div in soup.findAll('span',
								attrs = {'class':'posted-on'}):
				dates.append(div.text.strip())
	return dates


def get_description(soup):
	descriptions = []
	for div in soup.findAll('div',
								attrs = {'class':'entry-summary'}):
				descriptions.append(div.text.strip())
	return descriptions


def get_url(soup):
	links = []

	for i in soup.find_all('h2',{'class':'entry-title'}):
	   link = i.find('a',href=True)
	   links.append(link['href'])

	   if link is None:
		   continue
	return links




class Scrapper():
	def __init__(self):
		req = Request('https://www.newzealandshores.com/new-zealand-immigration-news', headers={'User-Agent': 'Mozilla/5.0'})
		URL = "https://www.newzealandshores.com/new-zealand-immigration-news"
		html = urllib.request.urlopen(req).read()
		soup = BeautifulSoup(html, 'html.parser')

		self.titles = get_title(soup)
		self.dates = get_date(soup)
		self.descriptions = get_description(soup)
		self.urls = get_url(soup)
