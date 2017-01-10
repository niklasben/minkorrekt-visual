# -*- coding: utf-8 -*-
import scrapy
from scrapy.selector import Selector
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from scrapy.http import Request

from crawler.items import CrawlerItem


class MiGeneralSpider(CrawlSpider):
    name = 'mi_general'
    allowed_domains = ['minkorrekt.de']
    start_urls = ['http://minkorrekt.de/feed/m4a/']

    rules = (
        Rule(LinkExtractor(
            allow=('http://minkorrekt.de/feed/m4a/'),
            unique=True),
            callback='parse_item',
            follow=True),
    )

    def parse_item(self, response):
        '''Return scraped items.'''
        sel = Selector(response)
        sites = sel.xpath('//body')
        items = []

        '''
        Das hier sollen die zu crawlenden Objekte werden

        i['number']
        i['name']
        i['date']
        i['url']
        i['mp3']
        i['mp4']
        i['length']
        i['text']
        i['special_episode']
        '''

        '''
        Das hier sind die Beispiele

        i['domain_id'] = response.xpath('//input[@id="sid"]/@value').extract()
        i['name'] = response.xpath('//div[@id="name"]').extract()
        i['description'] = response.xpath('//div[@id="description"]').extract()
        '''
        return i
