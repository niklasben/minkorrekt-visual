# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class MiGeneralSpider(CrawlSpider):
    name = 'mi_general'
    allowed_domains = ['minkorrekt.de']
    start_urls = ['http://minkorrekt.de/']

    rules = (
        Rule(LinkExtractor(allow=r'Items/'),
             callback='parse_item', follow=True),
    )

    def parse_item(self, response):
        i = {}

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
