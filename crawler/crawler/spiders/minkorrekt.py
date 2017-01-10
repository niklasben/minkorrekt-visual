# -*- coding: utf-8 -*-
from scrapy.spiders import XMLFeedSpider


class MinkorrektSpider(XMLFeedSpider):
    name = 'minkorrekt'
    allowed_domains = ['minkorrekt.de']
    start_urls = ['http://minkorrekt.de/feed/m4a/']
    iterator = 'iternodes'  # you can change this; see the docs
    itertag = 'item'  # change it accordingly

    def parse_node(self, response, selector):
        '''
        self.logger.info('Hi, this is a <%s> node!: %s', self.itertag, ''.join(node.extract()))

        item = TestItem()
        item['id'] = node.xpath('@id').extract()
        item['name'] = node.xpath('name').extract()
        item['description'] = node.xpath('description').extract()
        return item
        '''
        i = {}
        # i['url'] = selector.select('url').extract()
        # i['name'] = selector.select('name').extract()
        # i['description'] = selector.select('description').extract()
        return i
