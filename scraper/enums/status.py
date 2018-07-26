from enum import Enum, unique

@unique
class Status(Enum):
    GOOD = 1
    BAD = 2
    TRUE = 4
    FALSE = 3
