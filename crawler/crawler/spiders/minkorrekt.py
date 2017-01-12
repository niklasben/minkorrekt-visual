# -*- coding: utf-8 -*-
import sys

from scrapy.spiders import XMLFeedSpider
from crawler.items import CrawlerItem

reload(sys)
sys.setdefaultencoding('utf8')


class MinkorrektSpider(XMLFeedSpider):
    '''Spider to crawl the m4a-Feed.'''

    name = 'minkorrekt'
    allowed_domains = ['minkorrekt.de']
    start_urls = ['http://minkorrekt.de/feed/m4a/']
    namespaces = [
        ('atom', 'http://www.w3.org/2005/Atom'),
        ('bitlove', 'http://bitlove.org'),
        ('itunes', 'http://www.itunes.com/dtds/podcast-1.0.dtd'),
        ('psc', 'http://podlove.org/simple-chapters'),
        ('content', 'http://purl.org/rss/1.0/modules/content/'),
        ('fh', 'http://purl.org/syndication/history/1.0')
    ]
    iterator = 'iternodes'
    itertag = 'item'

    def parse_node(self, response, node):
        '''Parsing Function of Crawler.'''

        i = CrawlerItem()

        i['number'] = node.xpath('title/text()').re(r'Folge\s*(\d{0,3}[ab]?)')
        i['titlemain'] = node.xpath(
            'title/text()').re(r'Folge\s*\d*\W+(.*)\W{1}')
        i['pubdate'] = node.xpath(
            'pubDate/text()').re(r'^\w{3}[,]\s{1}(.*)\s\d{2}[:]\d{2}[:]\d{2}')
        i['pubday'] = node.xpath('pubDate/text()').re(r'^(.*)[,]')
        i['pubtime'] = node.xpath(
            'pubDate/text()').re(r'^\w{3}[,]\s{1}\d{2}\s{1}\w{3}\s{1}\d{4}' +
                                 '\s{1}(.*)\s{1}\+\d{4}$')
        i['url'] = node.xpath('link/text()').extract()
        i['duration'] = node.xpath('itunes:duration/text()').extract()
        #i['titlesub'] = node.xpath('itunes:subtitle/text()').extract()
        i['specials'] = node.xpath(
            'title/text()').re(ur'.*[\u201e|\u201c](?:(Ig-Nobelpreis|' +
                               'Nobelpreis|Jahresrückblick)).*')
        #i['description'] = node.xpath('content:encoded/text()').extract()
        # i['china'] = node.xpath('content:encoded/text()').re(r'china|China(.*)')

        return i
