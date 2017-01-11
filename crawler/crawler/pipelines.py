# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

from scrapy.exceptions import DropItem
import json


class CrawlerPipeline(object):
    '''Pipeline to alter scraped items.'''

    def open_spider(self, spider):
        '''Open Spider.'''
        self.file = open('../data/complete.jl', 'w+b')

    def close_spider(self, spider):
        '''Close Spider.'''
        self.file.close()

    def process_item(self, item, spider):
        '''Process Items.'''

        '''
        if item['description']:
        # Enter here how to clean the description part!
        '''

        line = json.dumps(dict(item)) + "\n"
        self.file.write(line)
        return item

        # if item['specials']:
        #     if any('Nobelpreis' in s for s in item['specials']):
        #         item['titlesub'] = 'China'
        #     else:
        #         raise DropItem(item['specials'])
