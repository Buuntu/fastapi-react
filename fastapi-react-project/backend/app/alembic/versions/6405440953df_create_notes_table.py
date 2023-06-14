"""create notes table

Revision ID: 6405440953df
Revises: 91979b40eb38
Create Date: 2023-06-09 09:53:27.798080

"""
from alembic import op
import sqlalchemy as sa
import datetime    # Add this line


# revision identifiers, used by Alembic.
revision = '6405440953df'
down_revision = '91979b40eb38'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'notes',
        sa.Column('id', sa.Integer, primary_key=True, index=True),
        sa.Column('title', sa.String(200), nullable=False),
        sa.Column('description', sa.String(500)),
        sa.Column('created_at', sa.DateTime, default=datetime.datetime.utcnow),
        sa.Column('user_id', sa.Integer, sa.ForeignKey('user.id'))
    )


def downgrade():
    op.drop_table('notes')
