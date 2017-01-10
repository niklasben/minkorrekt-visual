# -*- coding: utf-8 -*-
from scrapy.spiders import XMLFeedSpider

from crawler.items import CrawlerItem


class MinkorrektSpider(XMLFeedSpider):
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
    iterator = 'iternodes'  # you can change this; see the docs
    itertag = 'item'  # change it accordingly

    # def parse_node(self, response, selector):
    def parse_node(self, response, node):
        '''self.logger.info('This is a <%s> node!: %s',
                         self.itertag, ''.join(node.extract()))'''

        i = CrawlerItem()

        #i['number'] = node.xpath('title/text()').extract()
        i['titlemain'] = node.xpath('title/text()').extract()
        i['pubdate'] = node.xpath('pubDate/text()').extract()
        i['url'] = node.xpath('link/text()').extract()
        i['duration'] = node.xpath('itunes:duration/text()').extract()
        i['titlesub'] = node.xpath('itunes:subtitle/text()').extract()
        i['specials'] = node.xpath('content:encoded/text()').extract()
        # i['description'] = node.xpath('').extract()
        # i['china'] = node.xpath('').extract()

        return i
